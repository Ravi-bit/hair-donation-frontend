import React from 'react';
import { Route, Routes} from "react-router-dom"
import Donor from './Donor';
import Home from "./Home"
import Recipient from "./Recipient";
import LogInDonor from "./LogInDonor";
import LogInRecipient from './LogInRecipient';
 

function App() {

   return (
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/login/donor" element={<LogInDonor />} />
       <Route path="/login/recipient" element={<LogInRecipient />} />
       <Route path="/users/donor" element={<Donor />} />
       <Route path="/users/recipient" element={<Recipient />} />
     </Routes>
     
   )
}

export default App;