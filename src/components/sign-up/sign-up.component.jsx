import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { db } from "../../firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore"; 


class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const user = this.state;
        try {
            const docRef = await addDoc(collection(db, "users"), user);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }

    handleBlur = () => {}

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        id='displayName'
                        name='displayName'
                        label='Display Name'
                        type='text'
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        value={this.state.displayName}
                    />
                    <FormInput 
                        id='email'
                        name='email'
                        label='Email'
                        type='text'
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        value={this.state.email}
                    />
                     <FormInput 
                        id='password'
                        name='password'
                        label='Password'
                        type='password'
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        value={this.state.password}
                    />
                    <CustomButton type='submit'>Submit</CustomButton>
                    <CustomButton >Sign Up With Google</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
