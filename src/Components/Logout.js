import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  // Clear session storage to log out the user
  sessionStorage.clear();
  const navigate = useNavigate();

  return (
    <div style={{color:"white" }}>
      <center>  <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/> Thanks For Using Service&nbsp;
      <button className='btn btn-info' onClick={() => navigate('/Login')}>
        Click Here to Login Again
      </button>
      </center>

    </div>
  );
};

export default Logout;
