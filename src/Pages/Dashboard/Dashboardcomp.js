import React from 'react'
import './Dashboared.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboardcomp = () => {
  return (
    <div className='container-fluid'>
         <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
                
            <NavLink className="dashnav" to="/dashboard" as={Link}> <Button className='w-100' variant="success">My Appointment</Button>{' '}</NavLink> 
           
            </Nav.Item>
            <Nav.Item>
            <NavLink className="dashnav" to="/dashboard/users" as={Link}> <Button className='w-100' variant="success">All Users</Button>{' '}</NavLink> 
        
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <h1 className='dashcolour'>Welcome To Our Dashboard</h1>
            <Tab.Pane eventKey="first">
              
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
      <Outlet></Outlet>
    </Tab.Container>


    </div>
  )
}

export default Dashboardcomp;