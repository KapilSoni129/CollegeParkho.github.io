import React, { useEffect, useState  } from "react";
import {useParams} from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from "../../shared/components/UIElements/Card";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators"; 
import './NewReview.css'
import { useForm } from "../../shared/hooks/form-hook";
const Dummy_reviews= [
    {
        id:'r1',
        title:'Bhabha House',
        description: 'Best Hostel in our college with single and double rooms. Spacious and has balcony.',
        image: 'https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/36417492_256848771532651_1984863125177892864_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=973b4a&_nc_ohc=v8y12afQmi8AX-tJhHb&_nc_ht=scontent-bom1-1.xx&oh=00_AfAT8-7cYxnxuxKjW6fZqB9MKwZYvnzaXSXZ67a5XVy_Bg&oe=63F3A56B',
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
        image: 'https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/36417492_256848771532651_1984863125177892864_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=973b4a&_nc_ohc=v8y12afQmi8AX-tJhHb&_nc_ht=scontent-bom1-1.xx&oh=00_AfAT8-7cYxnxuxKjW6fZqB9MKwZYvnzaXSXZ67a5XVy_Bg&oe=63F3A56B',
        address: 'Plot No. 7, near Purkhoti Muktangan, Sector 24, -Naya Raipur, Chhattisgarh 493661',
        location: {
            lat: 21.1284694,
            lng: 81.7639767
        },
        creator: 'u2'
    }
]

const UpdateReview = () => {
    const [isLoading, setIsLoading] = useState(true);
    const id = useParams().collegeId;

    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false);

    const identifiedReview = Dummy_reviews.find(c => c.id === id);
    // console.log(identifiedReview)

    useEffect(() => {
        if(identifiedReview){
            setFormData({
                title: {
                    value: identifiedReview.title,
                    isValid: true
                },
                description: {
                    value: identifiedReview.description,
                    isValid: true
                }
            }, true);
        }
        setIsLoading(false);
    }, [setFormData, identifiedReview]);

    const reviewUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if (!identifiedReview) {
        return (
          <div className="center"><Card>
            <h2>Could not find review!</h2></Card>
          </div>
        );
      }

    if (isLoading) {
        return (
          <div className="center">
            <h2>Loading...</h2>
          </div>
        );
    }

    return (
        <form className="place-form" onSubmit={reviewUpdateSubmitHandler}>
            <Input id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}>
            </Input>
            <Input id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}>
            </Input>
            <Button type="Submit" disabled={!formState.isValid}>Update Review</Button>
        </form>)
};

export default UpdateReview;