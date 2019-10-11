import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../components/form/FormComponent';
import Table from '../components/table/TableComponent';

const Home = (props) => {
    const { 
            form, 
            onChangeInput, 
            onChangeSelect,
            inputValue,
            table, 
            response, 
            onTableClick, 
            showTable 
        } = props;

    return (
        <>
        <Link to="/movieinfo">To Movie Info</Link>
        <Form 
            form={form}
			onChangeInput={onChangeInput} 
            onChangeSelect={onChangeSelect}
            inputValue={inputValue}
		/>
		{showTable && <Table 
                table={table}
                response={response} 
                onTableClick={onTableClick} 
		    />
		}        
        </>
    );
}

export default Home;