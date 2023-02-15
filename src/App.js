import React from 'react';
import { Route, Routes} from "react-router-dom"
import Donor from './Donor';
import Home from "./Home"
import Recipient from "./Recipient";
import LogInDonor from "./LogInDonor";
import LogInRecipient from './LogInRecipient';
import Header from './Header';
import Body from './Body';
import Register from './Register';
 

function App() {

   return (
    <>
    <Header />
    <Routes>
      <Route  path="/" element={<Body />} />
      <Route  path="/home" element={<Body />} />
      <Route  path="/register" element={<Register />} />
      <Route path="/login/donor" element={<LogInDonor />} />
       <Route path="/login/recipient" element={<LogInRecipient />} /> 
       <Route path="/users/donor" element={<Donor />} />
       <Route path="/users/recipient" element={<Recipient />} />
       
     </Routes>
     </>
   )
}

export default App;