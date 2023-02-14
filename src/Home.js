import React, {useState} from "react";
import Header from "./Header";
import Body from "./Body";
import LogInDonor from './LogInDonor';
import LogInRecipient from './LogInRecipient'
import Register from "./Register";
import './styles/App.css';

function Home() {
  const [currentForm, setCurrentForm] = useState("");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div style={{
      height : '100%', backgroundColor: 'rgb(250, 245, 245)'}}>
    <Header onFormSwitch={toggleForm} />
    <div className="appContentSection">
    {
        currentForm === "" ? <Body /> : currentForm === "loginAsDonor" ?
          <LogInDonor  /> : currentForm === "loginAsRecipient" ? <LogInRecipient  /> : <Register  />
    }
      </div>
  </div>
   
  );
}

export default Home;
