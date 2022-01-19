import React from 'react';
import './Card.css';


const Main = props =>
    <div className='card-deck'>
        <div className='title-img'>
            <h3>{props.photo.title}</h3>  
        </div>
        <div className='img-of-day'> 
            <img src={props.photo.url} alt={props.photo.title} />
        </div> 
        <div className='date'> 
            <p>{props.photo.date}</p>
        </div>

        <div className='explanation'> 
            <p>{props.photo.explanation}</p>
        </div> 
    </div>;

export default Main;