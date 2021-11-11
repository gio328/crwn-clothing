import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
//import { BrowserRouter } from "react-router-dom";
//import { Redirect } from 'react-router';
import { auth } from '../../firebase/firebase.utils';


import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             email: '',
             password: '',
        }
    }
    handleBlur = () => {}
    handleChange = (event) =>{
        const nam = event.target.name;
        const val = event.target.value;
        this.setState({[nam]: val}); //{name: val, name: val}

    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            console.log('email: ',email, 'password: ', password);
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            console.log(userCredential);
        }catch(e){
            console.log('error => ', e);
        }
        
    }
    
    render(){

        return(
            <div className='sign-in'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput id='email' 
                               name='email' 
                               label='Email' 
                               type='text'
                               handleChange={this.handleChange}
                               handleBlur={this.handleBlur}
                               value={this.state.email}
                               />
                    <FormInput id='password' 
                                name='password' 
                                label='Password' 
                                type='text'
                                handleChange={this.handleChange}   
                                handleBlur={this.handleBlur} 
                                value={this.state.password}
                                />
                    <CustomButton type='submit'>Submit</CustomButton>
                    <CustomButton onClick={signInWithGoogle} >Sign In With Google</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;