import React from 'react';

import Figure from './ModalBodyFigure';
import Info from './ModalBodyInfo';

import { Modal, Container, Col, Row } from 'react-bootstrap';

const ModalBody = ({ modal, overview, posterPath, director, voteAverage }) => {
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
							director={null} 
							voteAverage={voteAverage} 
						/>
					</Col>
				</Row>
			</Container>
		</Modal.Body>	
	);
}

export default ModalBody;