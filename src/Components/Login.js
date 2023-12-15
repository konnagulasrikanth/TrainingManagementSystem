import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [userTypeError, setUserTypeError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      setUsernameError('Username is required');
    } else {
      setUsernameError(null);
    }

    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError(null);
    }

    if (!userType) {
      setUserTypeError('User type is required');
      return;
    } else {
      setUserTypeError(null);
    }

    try {
      const response = await fetch('https://localhost:7011/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: username, password, userType }),
      });

      if (response.ok) {
        const result = await response.json();

        if (result.message === 'Authentication successful!') {
          // Retrieve the employee ID and user type from the response body
          const { employeeId, userType: loggedInUserType } = result;

          // Store employeeId in session storage for employees
          if (loggedInUserType === 'Employee') {
            sessionStorage.setItem('employeeId', employeeId);
          }

          // Set session storage based on userType
          sessionStorage.setItem('userRole', loggedInUserType);
          sessionStorage.setItem('uid', username);

          switch (loggedInUserType) {
            case 'Employee':
              sessionStorage.setItem('layout', 'Employee');
              navigate('/HomeEmp');
              break;
            case 'Manager':
              sessionStorage.setItem('layout', 'Manager');
              navigate('/HomeManager');
              break;
            case 'Hr':
              sessionStorage.setItem('layout', 'HR');
              navigate('/HrHome');
              break;
            default:
              setMessage('Invalid userType');
          }
        } else {
          console.error('Login failed');
          setMessage('Login failed. Please check your credentials.');
        }
      } else {
        console.error('Login failed');
        setMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An unexpected error occurred');
    }
  };

  const handleNewUserClick = () => {
    navigate('/Register');
  };

  return (
    <div>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '385px' }}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                <form>
                  <center>
                    <h1>
                      <label style={{ fontStyle: 'italic', fontFamily: 'Comic Sans MS, cursive' }}>Login</label>
                    </h1>
                    <p>Please Enter UserName and Password!!</p>
                  </center>
                  <div>
                    <label htmlFor='username' className='form-label'>
                      UserName
                    </label>
                    <span style={{ color: 'red' }}>*</span>
                    <input
                      type='text'
                      className='form-control'
                      id='username'
                      placeholder='Enter UserName'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
                  </div>
                  <div>
                    <label htmlFor='password' className='form-label'>
                      Password
                    </label>
                    <span style={{ color: 'red' }}>*</span>
                    <input
                      type='password'
                      className='form-control'
                      id='password'
                      placeholder='Enter Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>
                      <input
                        type='radio'
                        name='userType'
                        value='Employee'
                        checked={userType === 'Employee'}
                        onChange={() => setUserType('Employee')}
                        className='form-check-input'
                      />
                      Employee
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>
                      <input
                        type='radio'
                        name='userType'
                        value='Manager'
                        checked={userType === 'Manager'}
                        onChange={() => setUserType('Manager')}
                        className='form-check-input'
                      />
                      Manager
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>
                      <input
                        type='radio'
                        name='userType'
                        value='Hr'
                        checked={userType === 'Hr'}
                        onChange={() => setUserType('Hr')}
                        className='form-check-input'
                      />
                      HR
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'red' }}>*</span>
                    {userTypeError && <p style={{ color: 'red' }}>{userTypeError}</p>}
                  </div>
                  <br />
                  <div>
                    <Link to='/target-route' onClick={handleSubmit} className='btn btn-primary'>
                      Submit
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/Register' className='btn btn-secondary' onClick={handleNewUserClick}>
                      New User? Click Here
                    </Link>
                    <br />
                    <br />
                    {message && <p style={{ color: 'red' }}>{message}</p>}
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;
