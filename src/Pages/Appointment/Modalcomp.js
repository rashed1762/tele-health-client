import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'
import Form from 'react-bootstrap/Form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  toast } from 'react-toastify';

const Modalcomp = (props) => {
  const [user, loading] = useAuthState(auth);
  const {_id,name,slots}=props.value;
  const {formateDate}=props.footer;
  const handleBooking=event=>{
    event.preventDefault();
    const slot=event.target.slot.value;
    props.setModalShow(null);

    const booking={
      valueId:_id,
      name:name,
      date:formateDate,
      slot,
      patient:user.email,
      patientName:user.displayName,
      phone:event.target.phone.value,

    }
   
    fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast(`Appointment is set, ${props.footer} at ${slot}`)
            }
            else{
                toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
            props.setModalShow(null);
      
        });

    
    
  }
    
  return (
    <div>
      
       <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='mx-auto'>
        <h6 className='d-flex booked '> Booking Available  :<span className='bookedform'>{props.footer}</span> </h6>
       
       <form onSubmit={handleBooking} className='mx-auto'>
        <br />
        <Form.Select name='slot' aria-label="Default select example">
          
          {

           slots && slots.map(slot=><option value={slot}>{slot}</option>)
          }
         
     
     
    </Form.Select>
        <br />
        
        
        <input className='modalform' name='name' type="text" disabled value={user?.displayName}/>
        <br />
        <input className='modalform' name='email' type="text" disabled value={user?.email}/>
        <br />
        <input className='modalform' name='phone' type="number" placeholder='Type your phone number.....'/>
        <br /> <br />
        <input  type="submit" value="submit" className=' btn btn-danger w-100'  placeholder='type hare'/>
        <br />
      


       </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Modalcomp;