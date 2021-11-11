import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp2 extends React.Component{
    constructor (){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: ''
        }
    }
    handleBlur = () => {}
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }
    handleSubmit = async(event) => {
        event.preventDefault();
        const {displayName, email, password} = this.state;
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            console.log('user: ', user);
            await createUserProfileDocument(user, {displayName});
            //if succeed reset state; clear the form
            this.setState({
                displayName: '',
                email: '',
                password: ''
            });
        }catch(error){
            console.log('error: ', error);
        }
    }

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

export default SignUp2;

