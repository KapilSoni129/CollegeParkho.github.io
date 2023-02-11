import React from 'react';

import "./ReviewList.css"
import Card from '../../shared/components/UIElements/Card';
import ReviewItem from './ReviewItem';
import Button from "../../shared/components/FormElements/Button";

const ReviewList = props => {// eslint-disable-next-line
  if (props.items.length == 0){
    return <div className='place-list center'>
        <Card>
            <h2>No Reviews. Maybe create one?</h2>
            <Button to="/college/new">Share Review</Button>
        </Card>
    </div>
  }

  return <ul className='place-list'>
    {props.items.map(review => 
    <ReviewItem 
        key={review.id} 
        id ={review.id}
        image = {review.image}
        title = {review.title}
        address = {review.address}
        description = {review.description}
        creatorId = {review.creator}
        coordinates={review.location}
    >    
    </ReviewItem>)}
  </ul>
};

export default ReviewList;