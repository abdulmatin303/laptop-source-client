import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      if(loading || updating) {
        return <Loading></Loading>
    }

      if(user) {
        console.log("user",user);
      }

      const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email,password);
        await updateProfile({ displayName : name });
        console.log('Updated profile');
        navigate('/home');
    }

    

    return (
        <div className='container w-50 mx-auto'>
            
            <div className='register-form'>
            
            <h2 className='text-primary mt-5 mb-3' style={{textAlign: 'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>

                <input type="submit" className='bg-success text-white my-3'  value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary text-decoration-none' >Please Login</Link> </p>
        </div>

        <SocialLogin></SocialLogin>
            
        </div>
    );
};

export default Register;