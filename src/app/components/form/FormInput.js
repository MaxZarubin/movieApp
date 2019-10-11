import React from 'react';

import { Form } from 'react-bootstrap';


const FormInput = ({ onChangeInput, label, placeholder, inputValue }) => {
	return (
		<Form.Group>
			<Form.Label>{label}</Form.Label>
			<Form.Control type="text" placeholder={placeholder} onChange={onChangeInput} value={inputValue} />
		</Form.Group>		
	);
}

export default FormInput;