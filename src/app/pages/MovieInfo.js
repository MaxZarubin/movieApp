import React, { Component } from 'react';
import axios from 'axios';

import Poster from '../components/movieInfo/Poster';
import Info from '../components/movieinfo/Info';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import { URL, API_KEY } from '../config/config';

class MovieInfo extends Component {
    state = {
        getMovieResponse: [],
        director: '',
        cast: []
    }

    componentDidMount(){
		const { id } = this.props;
		const queryString = `${URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`;	
 
		axios.get(queryString).then(response => {
			this.setState({
				getMovieResponse: response.data
			}, this.setState({
				director: response.data.credits.crew[0].name
			}), this.setState({
				cast: response.data.credits.cast
			}));
		});
	}

    render(){
		const { movieInfo ,id } = this.props;
		const { title, overview, poster_path, vote_average } = this.state.getMovieResponse;
        const { director, cast } = this.state;
        
        return (
            <Container>
                <h1>{title}</h1>
                <hr/>                
                <Row>
                    <Col md="4">
                    { poster_path ? <Poster path={poster_path} /> : <Spinner animation="border" role="status"/> }
                    </Col>
                    <Col md="7">
                        <Info
                            movieInfo={movieInfo}
                            overview={overview}
                            rating={vote_average}
                            director={director}
                            cast={cast}
                            id={id}
                         />
                         <Link to="/" type="button" className="btn btn-primary">Back</Link>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default MovieInfo;