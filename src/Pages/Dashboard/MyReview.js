import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import auth from '../../firebase.init';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';



const MyReview = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { data: services, isLoading,reset } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))
  const imgStorageKey='26bcc7f9aa48839e6d02d767adafab1c';
  const onSubmit = async data => {
          console.log('data',data);
          const image=data.image[0];
          const formData = new FormData();
          formData.append('image', image);
          const url=`https://api.imgbb.com/1/upload?key=${imgStorageKey}`
          fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }
                // send to your database 
                fetch('http://localhost:5000/doctor', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Doctor added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the doctor');
                    }
                })

            }
            
        })
          
          // navigate('/appoinment');
  }

  return (
    <div>
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
<Form.Label>Specialization</Form.Label>

<Form.Select {...register('speciality')} aria-label="Default select example">

      {
        services?.map(service=> <option
        key={service._id}
        value={service.name}
        
        > {service.name}</option>)
      }

     
    </Form.Select>

</Form.Group>
</Form>
</div>


{/* ...........................
submit part          
............................ */}

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>photo</Form.Label>
<Form.Control
type="file"
placeholder="Your name"
className="input input-bordered w-full max-w-xs"
{...register("image", {
    required: {
        value: true,
        message: 'image is Required'
    },
 
})}

/>
<label className='label text-danger'>

{errors.name?.type === 'required' && <span >{errors.name.message}</span>}</label>

</Form.Group>

<input className='btn btn-danger ' type="submit" value="add" />

  
</form>

    </div>
  )
}

export default MyReview;