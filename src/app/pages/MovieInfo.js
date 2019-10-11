import React, { Component } from 'react';
import axios from 'axios';

import Poster from '../components/movieInfo/Poster';
import Info from '../components/movieinfo/Info';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { URL, API_KEY } from '../config/config';

class MovieInfo extends Component {
    state = {
        getMovieResponse: [],
        director: '',
        cast: []
    }

    componentDidMount(){
		const { id } = this.props;
		const queryString = `${URL}/movie/18411?api_key=${API_KEY}&append_to_response=credits`;	
        
		axios.get(queryString).then(response => {
            console.log(response.data.credits.crew[0].name);
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
		const { original_title, overview, poster_path, vote_average } = this.state.getMovieResponse;
		const { director, cast } = this.state;

        return (
            <Container>
                <Row>
                    <Col>
                        <h1>{original_title}</h1>
                        <Poster path={poster_path}/>
                    </Col>
                    <Col>
                        <Info
                            movieInfo={movieInfo}
                            overview={overview}
                            rating={vote_average}
                            director={director}
                            cast={cast}

                         />
                    </Col>
                </Row>
            <Link to="/">Home</Link>
            </Container>
        );
    }

}

export default MovieInfo;