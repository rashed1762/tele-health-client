import React from 'react'
import Carcomp from '../../Components/Cssfile/Carousel/Carcomp';
import Button from 'react-bootstrap/Button';
import '../../Components/Cssfile/Home.css'
import img1 from '../../assets/images/fluoride.png'
import img2 from '../../assets/images/whitening.png'
import img3 from '../../assets/images/cavity.png'
import img4 from '../../assets/images/treatment.png'
import img5 from '../../assets/images/doctor-small.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBedPulse, faFilePrescription, faHeadset, faMoneyBill, faPeopleGroup, faUserDoctor,faVideoCamera} from '@fortawesome/free-solid-svg-icons'
import Footer from '../Shared/Footer';
const Homecomp = () => {
  
  return (
    <div>
      <Carcomp></Carcomp>

      <section className='container'>
        <div className="row shortinfo mt-5 ">
          <div className="col-md-4">
              <div className='short'>
                <div className='shortalign'>
                <h5>Opening Hours</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ab.</p>
                </div>
                
              </div>
          </div>
          <div className="col-md-4">
            <div className='short2'>
              <div  className='shortalign'>
              <h5>Visit Our Location</h5>
              <p>Kewatkhali,moyner mor,mymensingh</p>
              </div>
             
            </div>
          </div>
          <div className="col-md-4">
            <div className='short'>
              <div className='shortalign'>
              <h5>Contact Us</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, iste.</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>


       {/* ......................................................................  */}
                                       {/* our service */}
         {/* ....................................................................  */}


          <section className='mt-5 container-fluid'> 
            <div className='service' >
              <h6>Our services</h6>
              <h1>Service we provide</h1>
              
              <div>
                <div className="row servicelogo mt-5">
                  <div className="col-md-4">
                    <div>
                      <img src={img1} alt="" />
                      <div className='mt-5'>
                      <h5>Fluordide Treatment</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, qui!</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-md-4">
                      <img src={img2} alt="" />
                      <div className='mt-5'>
                      <h5>Teeth Whitening</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, qui!</p>
                      </div>
                      
                  </div>
                  <div className="col-md-4">
                    <img src={img3} alt="" />
                    <div className='mt-5'>
                    <h5>Cavity Filling</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, qui!</p>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div> 
          </section>


{/* ..........................................................................................................

                                                exceptional dental


............................................................................................................*/}




        <section className='exceptional container-fluid container '>
          <div className="row">
            <div className="col-md-6">
                <img className='exceptionalimg' src={img4} alt="" />
            </div>
            <div className="col-md-6">
              <div className='exceptionalinfo'>
              <h1 className='exceph1'>Exceptional Dental Care, on Your Terms</h1>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

              <Button variant="primary">Get Started</Button>{' '}
              </div>
            
            </div>
          </div>
        </section>

{/* .............................................................................................................

                                                  appointment                  

................................................................................................................. */}


            <section className='container-fluid' >

              <div className='appointment'>
                <div className="row">
                  <div className="col-md-6">
                    <img className='doctorimg' src={img5} alt="" />
                  </div>
                  <div className="col-md-6">
                    <div className='appointmentinfo'>
                    <h6>Appointment</h6>
                    <br />
                    <h1>Make an Appointment Today</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel sunt laudantium accusantium doloribus incidunt iste culpa obcaecati, laboriosam aperiam cupiditate nemo sit, in mollitia modi consequuntur ea praesentium eum?</p>
                    <Button variant="primary">Get Started</Button>{' '}
                    </div>
                
                  </div>
                </div>
              </div>
            </section>

{/* .............................................................................................................

                                            why you choice us
................................................................................................................             */}


                <section className='choose mt-5 '>
                  <h1>Why you choose us</h1>
                  <div>
                    <div className="row container choosepart">
                      <div className="col-md-4 d-flex">
                      <FontAwesomeIcon className='icon' icon={faUserDoctor} />
                      <div className='text-start'>
                        <h6>Verified Doctors</h6>
                        <p>Every doctors on DocTime platform are BMDC certified. We verify relevant information before the doctor can consult any patient.</p>
                      </div>
                      </div>
                      <div className="col-md-4 d-flex">
                      <FontAwesomeIcon className='icon' icon={faVideoCamera} />
                      <div className='text-start'>
                        <h6>Instant video consultation</h6>
                        <p>Most of our consultations starts within 10 minutes of making payment. The video call is secured by 256 bit encryption</p>
                      </div>
                          
                      </div>
                      <div className="col-md-4 d-flex">
                      <FontAwesomeIcon className='icon' icon={faFilePrescription} />
                      <div className='text-start'>
                        <h6>Instant electronics prescription</h6>
                        <p>As soon as the consultation is complete, doctor will provide the electronic prescription for the patient to download instantly or later.</p>
                      </div>
                      </div>
                    </div>
                  </div>
                </section>

{/* .............................................................................................................

                                                WHY YOU CHOOSE 2

................................................................................................................. */}

                  <section className='choose mt-5 '>
                  
                  <div>
                    <div className="row container choosepart">
                      <div className="col-md-4 d-flex">
                      <FontAwesomeIcon className='icon' icon={faMoneyBill} />
                      <div className='text-start'>
                        <h6>Easy payment options</h6>
                        <p>Patient can make payment online using our secured payment gateway partner by bKash, Rocket, Nagad, debit card, credit cards and many more.</p>
                      </div>
                      </div>
                      <div className="col-md-4 d-flex">
                      <FontAwesomeIcon className='icon' icon={faPeopleGroup} />
                      <div className='text-start'>
                        <h6>Better consultation quality</h6>
                        <p>Our doctors are committed to provide the best service by spending enough time required for the consultation. We constantly improve our service from the rating and feedback provided by patients.</p>
                      </div>
                          
                      </div>
                      <div className="col-md-4 d-flex">
                      <FontAwesomeIcon className='icon' icon={faHeadset} />
                      <div className='text-start'>
                        <h6>Super fast support</h6>
                        <p>Our dedicated customer service team is available to assist you resolving any issues or answering any queries. We are happy to help.</p>
                      </div>
                      </div>
                    </div>
                  </div>
                </section>

                  <hr />

                <section className='container-fluid'>
                  <Footer></Footer>
                </section>


    </div>
  )
}

export default Homecomp;