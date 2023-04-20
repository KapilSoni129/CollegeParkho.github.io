import React from "react";
import { useParams } from "react-router-dom";

import ReviewList from "../components/ReviewList";
import img from "./Bhabha.jpg";

const Dummy_reviews= [
    {
        id:'r1',
        title:'Bhabha House',
        description: 'Best Hostel in our college with single and double rooms. Spacious and has balcony.',
        image: img,
        address: 'Plot No. 7, near Purkhoti Muktangan, Sector 24, -Naya Raipur, Chhattisgarh 493661',
        location: {
            lat: 21.1284694,
            lng: 81.7639767
        },
        creator: 'u1'
    },

    {
        id:'r2',
        title:'Bhabha House',
        description: 'Best Hostel in our college with single and double rooms. Spacious and has balcony.',
        image: img,
        address: 'Plot No. 7, near Purkhoti Muktangan, Sector 24, -Naya Raipur, Chhattisgarh 493661',
        location: {
            lat: 21.1284694,
            lng: 81.7639767
        },
        creator: 'u2'
    }
]

const UserReview = () => {
    const userId = useParams().userId;
     // eslint-disable-next-line 
    const loadedReviews = Dummy_reviews.filter(college => college.creator == userId);
    return <ReviewList items={loadedReviews}></ReviewList>
};

export default UserReview;