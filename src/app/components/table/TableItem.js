import React from 'react';

import { Link } from 'react-router-dom';

const TableItem = ({ title, number, date, id, onTableClick }) => {
	return (
		<tr className="table-row" onClick={onTableClick} id={id}>
			<th scope="row">{number}</th>		
			<td><Link to={`/movieinfo/${id}`} className="table-link">{title}</Link></td>
			<td>{date ? date.split('-')[0] : 'no data'}</td>
		</tr>
	);
}

export default TableItem;