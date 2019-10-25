import React from 'react';

import Form from '../components/form/FormComponent';
import Table from '../components/table/TableComponent';

const Home = (props) => {
    const { 
            form, 
            onChangeInput, 
            onChangeSelect,
            onClickDelete,
            inputValue,
            table, 
            response, 
            onTableClick, 
            showTable 
        } = props;

    return (
        <>
        <Form 
            form={form}
			onChangeInput={onChangeInput} 
            onChangeSelect={onChangeSelect}
            onClickDelete={onClickDelete}
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