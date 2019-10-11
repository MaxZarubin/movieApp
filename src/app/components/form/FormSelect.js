import React from 'react';

import Options from './SelectOption';

import { Form } from 'react-bootstrap';


const FormSelect = ({ onChangeSelect, label, options }) => {
	
	const option = options.map(item => {
		return <Options title={item} key={item} />
	});

	return (
		<Form.Group onChange={onChangeSelect}>
			<Form.Label>{label}</Form.Label>
			<Form.Control as="select">
				{ option }
			</Form.Control>
		</Form.Group>		
	);
}

export default FormSelect;