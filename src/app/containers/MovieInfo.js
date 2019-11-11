import React, { Component } from 'react';
import { connect } from 'react-redux';

import Poster from '../components/movieInfo/Poster';
import Info from '../components/movieinfo/Info';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import { getMovie } from '../actions/movieInfoActions';

class MovieInfo extends Component {

    componentDidMount(){
		const { id, getMovie} = this.props;
        getMovie(id);
	}

    render(){
		const { movieInfo, id, director, cast } = this.props;
		const { title, overview, poster_path, vote_average } = this.props.getMovieResponse;
        
        return (
            <Container md="10">
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

const mapStateToProps = ({ home, info }) => ({
    getMovieResponse: info.getMovieResponse,
    director: info.director,
    cast: info.cast,
    id: home.movieId
});

export default connect(mapStateToProps, {getMovie})(MovieInfo);