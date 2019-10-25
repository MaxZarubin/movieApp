import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Home from '../pages/Home';
import MovieInfo from '../pages/MovieInfo';
import PageNotFound from '../pages/PageNotFound';

import { URL, API_KEY } from '../config/config';

import { Jumbotron, Container } from 'react-bootstrap';


class App extends Component {
	state = {
		inputValue: '',
		releaseDate: '',
		movieId: null,
		searchResponse: [],
	}

	handleChangeInput = (event) => {
		this.setState({
			inputValue: event.target.value
		}, this.handleSearch);
	}

	handleClickDelete = ()=> {
		this.setState({
			inputValue: ''
		});
	}

	handleChangeSelect = (event) =>{
		this.setState({
			releaseDate: event.target.value
		}, this.handleSearch);		
	}

	handleTableClick = (event) => {
		this.setState({
			movieId: event.target.closest('tr').id,
		});
	}

	handleSearch = () => {
		const { inputValue, releaseDate } = this.state;

		if(!inputValue){
			return null
		};

		const queryString = `${URL}/search/movie?api_key=${API_KEY}&query=${inputValue}` 
			+ (releaseDate ? `&primary_release_year=${releaseDate}` : '');

		axios.get(queryString).then(response => {
			this.setState({
				searchResponse: response.data.results
			});
		});		
	}

	render(){
		const { searchResponse, inputValue, movieId } = this.state;
		const { form, table, movieInfo } = this.props;
		const showTable = (inputValue && searchResponse.length > 0) ? true : false;

		return (
			<Jumbotron fluid id="jumbotron">
		      <Container>
					<Switch>
						<Route exact path ="/" render={() => 
							<Home 
								form={form}
								onChangeInput={this.handleChangeInput} 
								onChangeSelect={this.handleChangeSelect}
								onTableClick={this.handleTableClick}
								onClickDelete={this.handleClickDelete}
								inputValue={inputValue}
								table={table}
								response={searchResponse} 
								showTable={showTable}
								/>
							} 
						/>
						<Route path ='/movieinfo/:id' render={() => 
							<MovieInfo
								movieInfo={movieInfo}
								id={movieId}
							/>
							} 
						/>						
						<Route component={PageNotFound} />
					</Switch>	 
		      </Container>
		    </Jumbotron>		
		);		
	}
}

export default App;