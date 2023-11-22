'use client';
import trails from '../../public/data/trails.json';

import {useState} from 'react';

import Tabs from './Tabs';

const renderTable = (option) => {
	const result = trails[option].map(({name, location, start, time}) => {
		return (
			<>
				<span key={name} className="trails__item trails__item--name">{name}</span>
				<span key={name} className="trails__item trails__item--location">{location}</span>
				<span key={name} className="trails__item trails__item--start">{start}</span>
				<span key={name} className="trails__item trails__item--time">{time}</span>
			</>
		);
	});

	return result;
}

const Table = () => {
	const [table, setTable] = useState('easy');

	return (
		<div className="trails">
		   <div className="tab__container">
		      <btn onClick={() => {setTable('easy')}} className="tab tab--1">Easy</btn>
		      <btn onClick={() => {setTable('medium')}} className="tab tab--2">Medium</btn>
		      <btn onClick={() => {setTable('hard')}} className="tab tab--3">Hard</btn>
		   </div>
		   <div className="trails__content ">
		      {/*headings*/}
		      <div className="trails__content-heading trails__content-heading--name">Name</div>
		      <div className="trails__content-heading trails__content-heading--location">Location</div>
		      <div className="trails__content-heading trails__content-heading--start">Starting point</div>
		      <div className="trails__content-heading trails__content-heading--time">Time</div>
		   		{renderTable(table)}
		   </div>
		</div>
	);
};

export default Table;