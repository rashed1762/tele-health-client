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

function App() {
  return (
    <div className="App">

      <Navcomp></Navcomp>
     <Routes>

      <Route path="/" element={<Homecomp></Homecomp>} ></Route>
      <Route path="/about" element={<Aboutcomp></Aboutcomp>} ></Route>
      <Route path="/appoinment" element={<Appoinmentcomp></Appoinmentcomp>} ></Route>
      <Route path="/review" element={<Reviewcomp></Reviewcomp>} ></Route>
      <Route path="/contact" element={<Contactcomp></Contactcomp>} ></Route>
      <Route path="/login" element={<Logincomp></Logincomp>} ></Route>
      </Routes>
     
    </div>
  );
}

export default App;
