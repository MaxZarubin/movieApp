import React from 'react';

const TableItem = ({ title, number, date, id, onTableClick }) => {
	return (
		<tr className="table-row" onClick={onTableClick} id={id}>
			<th scope="row">{number}</th>		
			<td>{title}</td>
			<td>{date ? date.split('-')[0] : 'no data'}</td>
		</tr>
	);
}

export default TableItem;