import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './signUpForm.style.scss';

const SignUpForm = () => {
    return(
      <Formik 
      initialValues={{firstname: '', lastname: '', email: '', password: '', confirmPassword: ''}}
      validationSchema={Yup.object({
        firstName: Yup.string()
        .required('Required')
        .max(20, 'Must be 20 characters or less'),
        lastName: Yup.string()
        .required('required')
        .max(20, 'Must be 20 characters or less'),
        email: Yup.string()
        .required('Required').email('Must be a valid email address'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().required('Required')
        .oneOf( [Yup.ref('password'), null],'Password must match'),
      })}
      onSubmit={ values => alert(JSON.stringify(values, null, 2))}
    >
      <Form className='signUpForm'>
          <label htmlFor='firstName'>First Name</label>
          <Field name='firstName' type='text' />
          <div className='inputFeedback'><ErrorMessage name='firstName'/></div>
          <label htmlFor='lastName'>Last Name</label>
          <Field name='lastName' type='text' />
          <ErrorMessage name='lastName'/>
          <label htmlFor='email'>Email</label>
          <Field name='email' type='text'  />
          <ErrorMessage name='email' />
          <label htmlFor='password'>Password</label>
          <Field name='password' />
          <ErrorMessage name='password' />
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <Field name='confirmPassword' />
          <ErrorMessage name='confirmPassword'/>
          <button type='submit'>Submit</button>
      </Form>
    
    </Formik>
    
    );
}

 export default SignUpForm;