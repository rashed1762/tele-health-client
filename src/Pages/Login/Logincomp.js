import React, { useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import '../../Components/Cssfile/Login.css'
import Card from 'react-bootstrap/Card';
import auth from '../../firebase.init';
import Button from 'react-bootstrap/Button';
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Logincomp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

//  .................
//  sign email pass
//  .................

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);
const [token]=useToken(user || gUser)

// error massage
let signInError;
const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(()=>{
      if( token){
        navigate(from, { replace: true });
      
      }
    },[token,from,navigate])


if (loading || gLoading) {
  return <Spinner animation="border" variant="danger" />
}
if(error || gError){
  signInError= <p className='text-red'><small>{error?.message || gError?.message }</small></p>
}



const onSubmit=data=>{
  signInWithEmailAndPassword(data.email, data.password);
}



  return (
    <div>
         <Card className='mx-auto login' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='log'>Login</Card.Title>
        <form onSubmit={handleSubmit(onSubmit)}>


          <div className='text-start'>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full max-w-xs"
          {...register("email", {
              required: {
                  value: true,
                  message: 'Email is Required'
              },
              pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Provide a valid Email'
              }
          })}
          
          />
          <label className='label text-danger'>
          {errors.email?.type === 'required' && <span >{errors.email.message}</span>}
         {errors.email?.type === 'pattern' && <span >{errors.email.message}</span>}</label>
       
      </Form.Group>

{/* .....................
password part
..................... */}


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
         type="password"
          placeholder="Enter password" 
          {...register("password", {
            required:{
              value:true,
              message:'pasword is required'
            },

            minLength: {
              value: 6,
              message: 'Must be 6 charecter or longer' 
            }

          })} 
          
          />
       <label className='label text-danger'>
          {errors.password?.type === 'required' && <span >{errors.password.message}</span>}
         {errors.password?.type === 'minLength' && <span >{errors.password.message}</span>}</label>
      </Form.Group>
    </Form>
          </div>


{/* ...........................
submit part          
............................ */}


          {signInError}
          <input className='btn btn-info w-100' type="submit" value="Login" />

         <small> <p className='mt-3'>New to TeleHealth? <Link to="/register">Create New Account</Link></p></small>
            
    </form>
        <hr />
        <Button onClick={()=>signInWithGoogle()} variant="outline-danger">Continue with google</Button>{' '}
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default Logincomp;