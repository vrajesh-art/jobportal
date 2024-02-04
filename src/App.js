//this is code for App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Employeelogin from './Components/Home'
// import Register from './Components/register'
// import Registerexp from './Components/Registerexp'
import Companylogin from './Components/Companylogin';
import Companyregister from './Components/Companyregister';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Oneregister from './Components/Oneregister';
import Employeeregister from './Components/Test';
import Homepage from './Components/Homepage';
import Filter from './Filter';



function App() {
  return (
    <>

      <Router basename='/jobportal'>
        <Routes>


          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Elogin" element={<Employeelogin />} />
          <Route exact path="/Filter" element={<Filter />} />


          <Route exact path="/Eregister" element={<Employeeregister />} />


          <Route exact path="/Clogin" element={<Companylogin />} />
          <Route exact path="/Cregister" element={<Companyregister />} />

        </Routes>
      </Router>





    </>
  );
}

export default App;
