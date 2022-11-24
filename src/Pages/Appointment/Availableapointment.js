import React, { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Modal.css';
import Modalcomp from './Modalcomp';




const Availableapointment = ({footer}) => {
  const [modalData,setModalData]=useState([]);
    const [services,setServices]=useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const modalHandle=(data)=>{
      setModalShow(true);
      setModalData(data);
      
    }

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])

    
   
  return (
    <div>
      
            <div className='container-fluid container'>
            <div className="row mt-5 ">
                {
                    services.map((value)=>{
                     
                        const {name,slots}=value;
                      
                        return(
                            <div className="col-md-4 ct" >
                                <Card className='crdstyle'>
                                
                              
  
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>{
                slots.length>0
                ?<span>{slots[0]}</span>
                :<span className='text-danger'>No space available</span>
                
                
                }

            </p>
            <p>{slots.length} {slots.length>1 ? 'spaces':'space'} availavle</p>
          </Card.Text>
         
        </Card.Body>
        <Button disabled={slots.length===0} variant="primary" onClick={() => modalHandle(value)}>
        Booking Appointment
       
      
      </Button>
   
      </Card>
                            </div>
                        )
                    })
                }
                <Modalcomp
        show={modalShow}
        value={modalData}
        footer={footer}
        setModalShow={setModalShow}
        
        onHide={() => setModalShow(false)}
      /> 
            </div>
            </div>
            <div>
            
            </div>

            

    </div>
  )
}

export default Availableapointment;