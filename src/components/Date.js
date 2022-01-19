import React from 'react';
import './Form.css';

const Date = props => 
<form onSubmit = {props.changeDate} style={{ display: "center"}}>
    <input type="date"className='dateForm' />
    <input type="image" id="rocket" alt="Find" src={require(".//images/rocket.png")} className='submitButton'/>
</form>


export default Date; 