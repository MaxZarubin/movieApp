import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import MovieInfo from '../containers/MovieInfo';
import PageNotFound from '../pages/PageNotFound';

import { Jumbotron, Container } from 'react-bootstrap';


const App = ({ form, table, movieInfo }) => {
	return (
		<Jumbotron fluid id="jumbotron">
		    <Container>
				<Switch>
					<Route exact path ="/" render={() => 
							<Home form={form} table={table} />
						} 
					/>
					<Route path ='/movieinfo/:id' render={() => 
							<MovieInfo movieInfo={movieInfo} />
						} 
					/>						
					<Route component={PageNotFound} />
				</Switch>	 
		    </Container>
		</Jumbotron>		
	);		
}

export default App;