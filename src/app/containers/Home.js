import React from 'react';
import { connect } from 'react-redux';

import Form from '../components/form/FormComponent';
import Table from '../components/table/TableComponent';

import { changeInput, clickDelete, changeSelect, tableClick, search } from '../actions/homeActions';

const Home = (props) => {
    const {  
        form, 
        table,
        inputValue,        
        tableClick, 
        clickDelete, 
        releaseDate,
        changeInput, 
        changeSelect,          
        searchResponse
     } = props;

    const showTable = (inputValue && searchResponse.status === 200) ? true : false;


    const handleChangeInput = event => {
        changeInput(event, inputValue);
    }

    const handleChangeSelect = event => {
        changeSelect(event, inputValue, releaseDate);
    }

    return (
        <>
        <Form 
            form={form}
			onChangeInput={handleChangeInput} 
            onChangeSelect={handleChangeSelect}
            onClickDelete={clickDelete}
            inputValue={inputValue}
		/>
		{showTable && <Table 
                table={table}
                response={searchResponse.data.results} 
                onTableClick={tableClick} 
		    />
		}        
        </>
    );
}

const mapStateToProps = ({home}) => ({
    inputValue: home.inputValue,
	releaseDate: home.releaseDate,
	movieId: home.movieId,
	searchResponse: home.searchResponse,  
});

export default connect(mapStateToProps, {
    changeInput, 
    clickDelete, 
    changeSelect, 
    tableClick, 
    search
})(Home);