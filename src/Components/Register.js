import React, { useRef, useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
 
const Register = () => {
  const managerId = useRef(null);
  const employeeName = useRef(null);
  const email = useRef(null);
  const mobile = useRef(null);
  const password = useRef(null);
  const userType = useRef(null);
  const [message, setMessageError] = useState(null);
  const [managerIdError, setManagerIdError] = useState(null);
  const [employeeNameError, setEmployeeNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [mobileError, setMobileError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const ob = useNavigate();
 
  const validateInputs = () => {
    let isValid = true;
 
    if (!managerId.current.value) {
      setManagerIdError('ManagerId is required');
      isValid = false;
    } else {
      setManagerIdError(null);
    }
 
    if (!employeeName.current.value) {
      setEmployeeNameError('EmployeeName is required');
      isValid = false;
    } else {
      setEmployeeNameError(null);
    }
 
    if (!email.current.value) {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError(null);
    }
 
    if (!mobile.current.value) {
      setMobileError('Mobile is required');
      isValid = false;
    } else {
      setMobileError(null);
    }
 
    if (!password.current.value) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError(null);
    }
 
    return isValid;
  };
 
  const AddRecord = async (e) => {
    e.preventDefault();
 
    if (!validateInputs()) {
      return;
    }
 
    const nameValue = employeeName.current.value;
    const jsonDataUser = {
      UserName: nameValue,
      Password: password.current.value,
      UserType: userType.current.value,
    };
 
    fetch('https://localhost:7011/api/adduser/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonDataUser),
    })
      .then((userResponse) => {
        if (userResponse.ok) {
          return userResponse.json();
        } else {
          throw new Error('Failed to create user');
        }
      })
      .then((user) => {
        const jsonDataEmployee = {
          ManagerId: managerId.current.value,
          EmployeeName: nameValue,
          Email: email.current.value,
          Mobile: mobile.current.value,
          UserId: user,
        };
 
        fetch('https://localhost:7011/api/addemp/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(jsonDataEmployee),
        })
          .then((employeeResponse) => {
            if (employeeResponse.ok) {
              setMessageError('User and Employee registered successfully');
            } else {
              throw new Error('Failed to create employee');
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
        setMessageError('Failed to register user and employee');
      });
  };
  useEffect(() => {
    let timer;
    if (redirect) {
      timer = setTimeout(() => {
        // Redirect logic goes here
        window.location.href = '/Login'; // Replace '/login' with your actual login page route
      }, 3000); // Adjust the delay time as needed (here it's 3 seconds)
    }
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [redirect]);
 
  return (
    <div>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-dark text-white my-2 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-2 w-60'>
                <h1 className="text-center">Registration</h1>
                <form name="myform">
                  <div className="row">
                    <label htmlFor="managerid" className="form-label">ManagerId</label><span style={{ color: 'red' }}>*</span>
                    <input type="text" name="managerid" className="form-control" ref={managerId} placeholder="Enter ManagerId"
                      required />
                    {managerIdError && (<p style={{ color: "yellow" }}>{managerIdError}</p>)}
                  </div><br />
                  <div className="row">
                    <label htmlFor="employeeName" className="form-label">EmployeeName</label><span style={{ color: 'red' }}>*</span>
                    <input type="text" name="employeeName" className="form-control" ref={employeeName} placeholder="Enter EmployeeName"
                      required />
                    {employeeNameError && (<p style={{ color: "yellow" }}>{employeeNameError}</p>)}
                  </div><br />
                  <div className="row">
                    <label htmlFor="email" className="form-label">Email</label><span style={{ color: 'red' }}>*</span>
                    <input type="text" name="email" className="form-control" ref={email} placeholder="Enter Email"
                      required />
                    {emailError && (<p style={{ color: "yellow" }}>{emailError}</p>)}
                  </div><br />
                  <div className="row">
                    <label htmlFor="mobile" className="form-label">Mobile</label><span style={{ color: 'red' }}>*</span>
                    <input type="text" name="mobile" className="form-control" ref={mobile} placeholder="Enter Mobile"
                      required />
                    {mobileError && (<p style={{ color: "yellow" }}>{mobileError}</p>)}
                  </div><br />
                  <div className="row">
                    <label htmlFor="password" className="form-label">Password</label><span style={{ color: 'red' }}>*</span>
                    <input type="password" name="password" className="form-control" ref={password} placeholder="Enter Password"
                      required />
                    {passwordError && (<p style={{ color: "yellow" }}>{passwordError}</p>)}
                  </div><br />
                  <div className="row">
                    <label htmlFor="userType" className="form-label">UserType</label><span style={{ color: 'red' }}>*</span>
                    <input type="text" name="userType" className="form-control" ref={userType} value="Employee" readOnly
                    />
                  </div>
                  <br />
                  <center><Link className="btn btn-primary" onClick={AddRecord}>Register</Link></center>
                  {message && (<p style={{ color: "yellow" }}>{message}</p>)}
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
 
export default Register;