import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if(loading) {
        return <Loading></Loading>
    }

    if (error) {
        
       errorElement =  <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        
      }

      if(user){
        navigate(from, { replace: true });
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className="bg-primary w-50"></div>
                <p className='mt-2 px-2'>Or</p>
                <div  style={{height:'1px'}} className="bg-primary w-50"></div>
            </div>

            {errorElement}

            {/* google sign in button  */}
            <div className=''>

            <button 
             onClick={() => signInWithGoogle()}
            className='btn btn-warning w-50 mx-auto d-block'>
            <span><i class="fa-brands fa-google"></i></span>
            <span className='ps-3'>Google Sign In</span>
            </button>

            </div>


        </div>
    );
};

export default SocialLogin;