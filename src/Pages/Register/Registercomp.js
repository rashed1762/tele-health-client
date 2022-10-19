import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import auth from '../../firebase.init';
import Button from 'react-bootstrap/Button';
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Registercomp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

//  .................
//  sign email pass
//  .................

const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
] = useCreateUserWithEmailAndPassword(auth);
const [updateProfile, updating, updateError] = useUpdateProfile(auth);
const [token]=useToken(user || gUser);
const navigate=useNavigate();

// error massage
let signInError;


if (loading || gLoading || updating) {
  return <Spinner animation="border" variant="danger" />
}
if(error || gError ||updateError){
  signInError= <p className='text-red'><small>{error?.message || gError?.message ||updateError?.message }</small></p>
}

if(token){
console.log(user || gUser);
navigate('/appoinment');

}

const onSubmit = async data => {
  await createUserWithEmailAndPassword(data.email, data.password);
  await updateProfile({ displayName: data.name });
        console.log('update done');
        // navigate('/appoinment');
}
  return (
    <div>
    <Card className='mx-auto login' style={{ width: '18rem' }}>
 <Card.Body>
   <Card.Title>Sign Up</Card.Title>
   <form onSubmit={handleSubmit(onSubmit)}>


     <div className='text-start'>
     <Form>

     <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Name</Form.Label>
   <Form.Control
     type="name"
     placeholder="Your name"
     className="input input-bordered w-full max-w-xs"
     {...register("name", {
         required: {
             value: true,
             message: 'Name is Required'
         },
      
     })}
     
     />
     <label className='label text-danger'>
     
    {errors.name?.type === 'required' && <span >{errors.name.message}</span>}</label>
  
 </Form.Group>


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
     <input className='btn btn-danger w-100' type="submit" value="SignUp" />

    <small> <p>Already ahave an account? <Link to="/login">Please Login</Link></p></small>
       
</form>
   <hr />
   <Button onClick={()=>signInWithGoogle()} variant="outline-danger">continue with google</Button>{' '}
  
 </Card.Body>
</Card>
</div>
  )
}

export default Registercomp;