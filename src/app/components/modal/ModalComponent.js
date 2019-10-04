import React, { Component } from 'react';
import axios from 'axios';

import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import { url, apiKey } from '../../config/config';

import { Modal } from 'react-bootstrap';

class ModalComponent extends Component {
	constructor(props){
		super(props);

		this.state = {
			getMovieResponse: [],
			director: '',
			cast: []
		}
	}

	componentDidMount(){
		const { id } = this.props;
		const queryString = `${url}/movie/${id}?api_key=${apiKey}&append_to_response=credits`;	

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
		const { modal, show, onCloseModal } = this.props;
		const { original_title, overview, poster_path, vote_average } = this.state.getMovieResponse;
		const { director, cast } = this.state;

		return (
			<Modal show={show} size="lg" onHide={onCloseModal}>
				<ModalHeader title={original_title} />
				<ModalBody
					modal={modal} 
					overview={overview} 
					posterPath={poster_path}
					director={director}
					cast={cast}
					voteAverage={vote_average}
				/>
			</Modal>		
		)		
	}

}

export default ModalComponent;