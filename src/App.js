import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navcomp from './Pages/Shared/Navcomp';
import Homecomp from './Pages/Home/Homecomp';
import Aboutcomp from './Pages/About/Aboutcomp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appoinmentcomp from './Pages/Appointment/Appoinmentcomp';
import Reviewcomp from './Pages/Review/Reviewcomp';
import Contactcomp from './Pages/Contact/Contactcomp';
import Logincomp from './Pages/Login/Logincomp';
import Registercomp from './Pages/Register/Registercomp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboardcomp from './Pages/Dashboard/Dashboardcomp';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';


function App() {
  return (
    <div className="App">

      <Navcomp></Navcomp>
     <Routes>

      <Route path="/" element={<Homecomp></Homecomp>} ></Route>
      <Route path="about" element={<Aboutcomp></Aboutcomp>} ></Route>
      <Route path="appoinment" element={
        <RequireAuth>
          <Appoinmentcomp></Appoinmentcomp>
        </RequireAuth>
      
      } ></Route>
      <Route path="dashboard" element={
        <RequireAuth>
          <Dashboardcomp></Dashboardcomp>
        </RequireAuth>
      
      } >
        <Route index element={<MyAppointment></MyAppointment>} ></Route>
        <Route path="review" element={<MyReview></MyReview>} ></Route>
        <Route path="users" element={<Users></Users>} ></Route>

      </Route>
      
      <Route path="contact" element={<Contactcomp></Contactcomp>} ></Route>
      <Route path="login" element={<Logincomp></Logincomp>} ></Route>
      <Route path="register" element={<Registercomp></Registercomp>} ></Route>
      </Routes>

      {/* <ToastContainer /> */}
     
    </div>
  );
}

export default App;
