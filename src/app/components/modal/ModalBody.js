import React from 'react';

import Figure from './ModalBodyFigure';
import Info from './ModalBodyInfo';

import { Modal, Container, Col, Row } from 'react-bootstrap';

const ModalBody = ({ modal, overview, posterPath, director, cast, voteAverage }) => {

	const actors = [];

	for(let i = 0, max = cast.length; i < max; i++){
		actors.push(cast[i].name);
		if(i > 5){
			break;
		}
	}

	return (
		<Modal.Body className="modal-body">
			<Container>   
			    <Row>
			        <Col md="6">
			        	<Figure posterPath={posterPath}/>
					</Col>

					<Col md="6">
						<Info 
							modal={modal} 
							overview={overview} 
							director={director}
							actors={cast.length > 0 ? actors.join(', ') : 'no data'}
							voteAverage={voteAverage} 
						/>
					</Col>
				</Row>
			</Container>
		</Modal.Body>	
	);
}

export default ModalBody;