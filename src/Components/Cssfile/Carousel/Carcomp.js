import React from 'react'
import './Carcomp.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../assets/carousel/1.webp'
import img2 from '../../../assets/carousel/2.jpg'
import img3 from '../../../assets/carousel/4.webp'
import Button from 'react-bootstrap/Button';


const Carcomp = () => {
  return (
    <div>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 car"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption >
            <div className='car1info'>
            <h1 className='carh1'>Your new smile start hare</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="primary">Get Started</Button>{' '}
          
            </div>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 car"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className='car2info'>
            <h1>Our doctors</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 car"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='car3h1'>24/7 SERVICE</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carcomp;
