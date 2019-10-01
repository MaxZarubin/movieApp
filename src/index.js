import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/layouts/App';

const form = {
	inputLabel: 'Movie search',
	inputPlaceholder: 'Search...',
	selectLabel: 'Year',
	selectOptions: ['All Years', '2019', '2018', '2017', '2016', '2015'],
};

const table = {
	number: '#',
	name: 'Name',
	date: 'Release Date',
};

const modal = {
	overview: 'Overview',
	director: 'Director',
	rating: 'Rating',
};

ReactDOM.render(
	<App 
		form={form}
		table={table}
		modal={modal}
	/>
	,document.getElementById('root')
);