import React, { useState } from 'react';

function StudentForm(props) {
const [name, setName] = useState('');
const [address, setAddress] = useState('');
const [coursename, setCourseName] = useState('');


const changeName = (event) => {
	setName(event.target.value);
};

const changeAddress = (event) => {
	setAddress(event.target.value);
};
const changeCourseName = (event) => {
	setCourseName(event.target.value);
};


const transferValue = (event) => {
	event.preventDefault();
	const val = {
	name,
	address,
    coursename,
	};
	props.func(val);
	clearState();
};

const clearState = () => {
	setName('');
	setAddress('');
    setCourseName('');
};

return (
	<div>
	<label>Name</label>
	<input type="text" value={name} onChange={changeName} />
	<label>Address</label>
	<input type="text" value={address} onChange={changeAddress} />
    <label>CourseName</label>
	<input type="text" value={coursename} onChange={changeCourseName} />
	<button onClick={transferValue}> Click to add a student</button>
	</div>
);
}

export default StudentForm;
