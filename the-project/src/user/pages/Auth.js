import React,{ useState, useContext } from 'react'

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_EMAIL} from '../../shared/util/validators'; 
import { useForm } from '../../shared/hooks/form-hook';
import Button from '../../shared/components/FormElements/Button';
import "./Auth.css";
import { AuthContext } from '../../shared/context/auth-context';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLogin] = useState(true);

    const[formState, inputHandler, setFormData] = useForm({
        email:{
            value:'',
            isValid: false
        },
        password:{
            value:'',
            isValid: false
        }
    },false);

    const switchModeHandler = () => {
        if(!isLoginMode){
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid);
        }else{
            setFormData({
                ...formState.inputs,
                name:{
                    value: '',
                    isValid: false
                }
            },false);
        }
        setIsLogin(prevMode => !prevMode)
    };

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); //send this to the backend
        auth.login();
    };  

    return <Card className="authentication">
        <h2>Login Required</h2><hr></hr>
        <form onSubmit={authSubmitHandler}>
        {!isLoginMode && <Input
            id = "name"
            element="input" 
            type="text" 
            label="Name" 
            validators={[VALIDATOR_REQUIRE()]}
            errorText={"Please enter a valid name."}
            onInput={inputHandler}>
        </Input> }
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
        <Button type ="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'Log In' : 'Sign Up'}</Button>
    </form>
    <Button inverse onClick={switchModeHandler}>{isLoginMode ? 'Switch to Sign In' : 'Switch to Sign Up'}</Button>
    </Card>
};

export default Auth;
