import React, { useState } from 'react'
import '../../Components/Cssfile/Appointment.css'
import img1 from '../../assets/images/appoient.jpg'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import Availableapointment from './Availableapointment';



const Appoinmentcomp = () => {
  const [selected,setSelected] = useState(new Date());
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>{format(selected, 'PP')}.</p>
  }
  return (
  
    <div>

      <div className="row container mt-5">
        <div className="col-md-6">
        <div className='calender'>
      <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
    <p className='format'> You picked{footer}</p>
      </div>
        </div>
        <div className="col-md-6">
          <img className='chair' src={img1} alt="" />
        </div>
      </div>

      <section className='availavle'>
        <h6>Available appointment on {footer}</h6>
        <Availableapointment footer={footer} ></Availableapointment>
      </section>

      

      
        
       
  

    </div>
  )
}

export default Appoinmentcomp;