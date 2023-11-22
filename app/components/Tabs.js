'use client';

const Tabs = (props) => {
	const test = () => {
		console.log(props);
	}

	return (
		<div className="tab__container">
		   <btn onClick={() => {test()}} className="tab tab--1">Easy</btn>
		   <btn onClick={() => {select('medium')}} className="tab tab--2">Medium</btn>
		   <btn onClick={() => {select('hard')}} className="tab tab--3">Hard</btn>
		</div>
	);
}

export default Tabs;