import React from 'react';

import { Form } from 'react-bootstrap';


const FormInput = ({ onChangeInput, label, placeholder, inputValue, onClickDelete }) => {
	return (
		<Form.Group>
			<Form.Label>{label}</Form.Label>
			<Form.Control type="text" placeholder={placeholder} onChange={onChangeInput} value={inputValue} />
			<div id="search-delete" onClick={onClickDelete}>&times;</div>
		</Form.Group>		
	);
}

export default FormInput;