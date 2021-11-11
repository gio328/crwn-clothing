import React from "react";
import { Formik } from "formik";
import { render } from "react-dom";


const FormikForm = () => {
    return (
        <div>
            <Formik 
                initialValues={{ displayName: "", email: "", password: "", confirmedPassword: ""}}
                onSubmit = { (values) => alert(JSON.stringify(values, null, 2))}
            >    
                {
                    (props) => {
                        return (
                            <div className=''>
                                <form>
                                    <input id='displayName' type='text' className=''
                                        placeholder = 'Display Name'
                                    />
                                    <input id='email' type='text' 
                                        placeholder='Email'
                                    />
                                    <input id='password' type='text' 
                                        placeholder='Password'
                                    />
                                    <input id='confirmedPassword' type='text' 
                                        placeholder='Confirm Password'
                                    />
                                    <button type="submit" >
                                     Submit
                                    </button>
                                </form>
                            </div>
                        );
                    }
                }
            </Formik>
        </div>
    );
}


export default FormikForm;