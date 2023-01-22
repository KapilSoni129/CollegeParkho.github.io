import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import "./ReviewItem.css"
import Button from "../../shared/components/FormElements/Button";

const ReviewItem = props => {
  return <li className='place-item'>
    <Card className="place-item__content">
    <div className='place-item__image'>
        <img src={props.image} alt={props.title}></img>
    </div>
    <div className='place-item__info'>
        <h2>{props.title}</h2>
        <h3>{props.address}</h3>
        <p>{props.description}</p>
    </div>
    <div className='place-item__actions'>
        <Button inverse>View on Map</Button>
        <Button to={`/college/${props.id}`}>Edit</Button>
        <Button danger>Delete</Button>
    </div>
    </Card>
  </li>
};

export default ReviewItem;