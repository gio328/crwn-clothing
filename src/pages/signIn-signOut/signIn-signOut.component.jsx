import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
//import SignUp from "../../components/sign-up/sign-up.component";
import SignUp2 from "../../components/sign-up/sign-up2.component";
import './signIn-signOut.style.scss';

const SignInSignOut = () => {
      
    return (
        <div className='signInsignUp'>
               <div className='signIn'>
                 <h2 className='signOn'>Already Have An Account?</h2>
                 <h3 className='signOn'>Login:</h3>
                 <SignIn />
               </div>
               <div className='signUp'>
                   <h2 className='signOn'>Doesn't Have Account?</h2>
                   <h3 className='signOn'>Sign Up:</h3>
                   <SignUp2 />
               </div>
        </div>
    );
}

export default SignInSignOut;