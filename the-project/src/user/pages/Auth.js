import React from 'react'

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL} from '../../shared/util/validators'; 
import { useForm } from '../../shared/hooks/form-hook';
import Button from '../../shared/components/FormElements/Button';
import "./Auth.css";

const Auth = () => {
    const[formState, inputHandler] = useForm({
        email:{
            value:'',
            isValid: false
        },
        password:{
            value:'',
            isValid: false
        }
    },false);

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); //send this to the backend
    };  

    return <Card className="authentication">
        <h2>Login Required</h2><hr></hr>
        <form onSubmit={authSubmitHandler}>
        {/* <Input
            id = "name"
            element="input" 
            type="text" 
            label="Name" 
            validators={[VALIDATOR_REQUIRE()]}
            errorText={"Please enter a valid name."}
            onInput={inputHandler}>
        </Input> */}
        <Input
            id = "email"
            element="input" 
            type="email" 
            label="E-Mail" 
            validators={[VALIDATOR_EMAIL()]}
            errorText={"Please enter a valid email address."}
            onInput={inputHandler}
            >
         </Input>
         <Input
            id = "password"
            element="input" 
            type="password" 
            label="Password" 
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText={"Please enter a valid password, at least 8 character."}
            onInput={inputHandler}
            >
         </Input>
        <Button type ="submit" disabled={!formState.isValid}>Log In</Button>
    </form>
    </Card>
};

export default Auth;
