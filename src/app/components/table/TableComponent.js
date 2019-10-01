import React from 'react';

import TableItem from './TableItem';

import { Table } from 'react-bootstrap';


const TableComponent = ({ table, response, onTableClick }) => {
	let items = response.map(( item, index ) => {
		 return <TableItem 
		 			title={item.title}
		 			date={item.release_date} 
		 			key={item.id} 
		 			number={index + 1}
		 			id={item.id}
		 			onTableClick={onTableClick}
		 		/>
	});

	return (
		<Table striped bordered>
			  <thead className="thead-dark">
			    <tr>
			      <th scope="col">{table.number}</th>
			      <th scope="col">{table.name}</th>
			      <th scope="col">{table.date}</th>
			    </tr>
			  </thead>
			  <tbody>

			  	{ items }

			  </tbody>
		</Table>
	);
}

export default TableComponent;