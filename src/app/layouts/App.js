import React, { Component } from 'react';
import axios from 'axios';

import Form from '../components/form/FormComponent';
import Table from '../components/table/TableComponent';
import Modal from '../components/modal/ModalComponent';
import { url, apiKey } from '../config/config';

import { Jumbotron, Container } from 'react-bootstrap';


class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			inputValue: '',
			releaseDate: '',
			movieId: null,
			showModal: false,
			searchResponse: [],

		}

		this.handleChangeInput = this.handleChangeInput.bind(this);
		this.handleChangeSelect = this.handleChangeSelect.bind(this);
		this.handleTableClick = this.handleTableClick.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);		
	}



	handleChangeInput(e){
		this.setState({
			inputValue: e.target.value
		}, this.handleSearch);
	}

	handleChangeSelect(e){
		this.setState({
			releaseDate: e.target.value
		}, this.handleSearch);		
	}

	handleTableClick(e){
		this.setState({
			movieId: e.target.parentNode.id,
			showModal: true
		});
	}

	handleCloseModal(){
		this.setState({
			showModal: false
		});
	}

	handleSearch(){
		const { inputValue, releaseDate } = this.state;

		if(!inputValue){
			return null
		}

		const queryString = `${url}/search/movie?api_key=${apiKey}&query=${inputValue}` 
			+(releaseDate ? `&primary_release_year=${releaseDate}` : '');

		axios.get(queryString).then(response => {
			this.setState({
				searchResponse: response.data.results
			});
		});		
	}

	render(){
		const { searchResponse, inputValue, showModal, movieId } = this.state;
		const { form, table, modal } = this.props;
		const showTable = (inputValue && searchResponse.length > 0) ? true : false;

		return (
			<Jumbotron fluid>
		      <Container>
		        <Form 
		        	form={form}
		        	onChangeInput={this.handleChangeInput} 
		        	onChangeSelect={this.handleChangeSelect}
		        /> 

				{showTable && <Table 
								table={table}
								response={searchResponse} 
								onTableClick={this.handleTableClick} 
								/>
				}

				{showModal && <Modal 
								modal={modal}
								show={showModal} 
								onCloseModal={this.handleCloseModal}
								id={movieId}
								/>
				}

		      </Container>
		    </Jumbotron>		
		);		
	}
}

export default App;