import React from 'react';

import FormInput from './FormInput';
import FormSelect from './FormSelect';

import { Form, Col, Dropdown } from 'react-bootstrap';


const FormComponent = ({ onChangeInput, onChangeSelect, form }) => {

	return (
		<Form>
	        <Form.Row>
	        	<Col md={3}>
	        		<FormInput 
	        			onChangeInput={onChangeInput}
	        			label={form.inputLabel}
	        			placeholder={form.inputPlaceholder}
	        		/>
				</Col>
				<Col xs lg="2"> 
					<FormSelect 
						onChangeSelect={onChangeSelect}
						label={form.selectLabel}
						options={form.selectOptions}
					/>
				</Col>
			</Form.Row>
	    </Form>
	);
}

export default FormComponent;