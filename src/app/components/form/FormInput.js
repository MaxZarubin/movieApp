import React from 'react';

import { Form } from 'react-bootstrap';


const FormInput = ({ onChangeInput, label, placeholder }) => {
	return (
		<Form.Group controlId="exampleForm.ControlInput1">
			<Form.Label>{label}</Form.Label>
			<Form.Control type="text" placeholder={placeholder} onChange={onChangeInput}/>
		</Form.Group>		
	);
}

export default FormInput;