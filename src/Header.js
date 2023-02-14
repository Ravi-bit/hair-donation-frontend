import React from "react";
import "./styles/styles.css";
import Button from 'react-bootstrap/Button';



function Header(props){
    return(
       <header className="headerSection">
       <div className = "iconSection">
          <img src={ require('./images/headerIcon.png')} alt="Icon" height={60} width={80} />
       </div>
       <div className ="logoSection">
         <h4>Hair Donation Website</h4>
       </div>
       <div className="iconSection">
          <nav className="loginSection">
            <div className="a">
              <Button variant="info" className ="headerButtons" onClick={() => props.onFormSwitch("")} >Home</Button>
            </div>
            <div className="a">
              <Button variant="primary" className ="headerButtons" onClick={() => props.onFormSwitch('loginAsDonor')}>LogIn as Donor</Button>
            </div>
            <div className="a">
            <Button variant="secondary"  className ="headerButtons" onClick={() => props.onFormSwitch('loginAsRecipient')}>LogIn as Recipient</Button>
            </div>
            <div className="a">
              <Button variant="success"  className ="headerButtons" onClick={() => props.onFormSwitch('register')} >Register</Button>
            </div>  
          </nav>  
       </div>
      </header>

    );
}

export default Header;