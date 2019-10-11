import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './app/layouts/App';

import './css/style';

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

const movieInfo = {
	overview: 'Overview',
	director: 'Director',
	cast: 'Cast',
	rating: 'Rating',
};

ReactDOM.render(
	<BrowserRouter>
		<App form={form} table={table} movieInfo={movieInfo} />
	</BrowserRouter>
,document.getElementById('root'));