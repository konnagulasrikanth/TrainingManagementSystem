import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

const Employee = () => {
  const navigate = useNavigate();

  function NoMethod() {
    const data = document.forms['myform'].elements.data.value;
    navigate({
      pathname: '/Search',
      search: `?fname=${data}`,
    });
  }

  // Check the user role stored in session storage
  const userRole = sessionStorage.getItem('userRole');
  const isUserLoggedIn = sessionStorage.getItem('uid') !== null;

  return (
    <div>
              <img src="/Assets/Images/banner1.jpeg" style={{ width: '100%', height: '170px' }} />

      <div>
      {/* <div className="carousel slide" data-ride="carousel" > 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="/assets/images/b1.jpeg" style={{ width: '100%', height: '170px' }} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/assets/images/b2.jpeg" style={{ width: '100%', height: '170px' }} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/assets/images/b3.jpeg" style={{ width: '100%', height: '170px' }} alt="Third slide"/>
    </div>
    <Link className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </Link>
  <Link className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true">
    <span className="sr-only">Next</span></span>
  </Link>
  </div> */}

        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              {/* Rest of your navbar content */}
              <div className="navbar-nav">
                {/* Links based on user role */}
                {isUserLoggedIn && userRole === 'Employee' && (
                  <>
                    {/* <Link to="/HomeEmp" className="nav-item nav-link">
                      Home
                    </Link> */}
                    {/* Add other Employee-specific links */}
                    {/* For example */}
                    <Link to="/HomeEmp/TrainingRegistration1" className="nav-item nav-link">
                      TrainingRegistration
                    </Link>
                    {/* Add more links here */}
                  </>
                )}
                {/* Add other common links accessible to all roles */}
                {/* For example */}
                <Link to="/HomeEmp/Attendance2" className="nav-item nav-link">
                  Attendance
                </Link>
                <Link to="/HomeEmp/FeedBack" className="nav-item nav-link">
                  Give Feedback
                </Link>
                <br />
              </div>
              <div className="navbar-nav">
                {isUserLoggedIn ? (
                  <li>
                    <Link className="nav-item nav-link" to="/Logout">
                      Logout
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link className="nav-item nav-link" to="/LoginRadio">
                      login
                    </Link>
                  </li>
                )}
              </div>
              {isUserLoggedIn ? (
                <div className="btn btn-success">Welcome : {sessionStorage.getItem('uid')}</div>
              ) : (
                <div className="btn btn-info">Welcome Guest</div>
              )}
            </div>
          </nav>
          <div style={{ marginTop: '100px', marginLeft: '150px' }}>
            <Outlet />
          </div>
        </div>
      </div>
     </div>

    
  );
};

export default Employee;

// import React from 'react';
// import { Link, useNavigate, Outlet } from 'react-router-dom';

// const Employee = () => {
//   const ob = useNavigate();

//   function NoMethod() {
//     const data = document.forms['myform'].elements.data.value;
//     ob({
//       pathname: '/Search',
//       search: `?fname=${data}`,
//     });
//   }

//   // Check the user role stored in session storage
//   const userRole = sessionStorage.getItem('userRole');
//   const isUserLoggedIn = sessionStorage.getItem('uid') !== null;

//   return (
//     <div>
//       <div>
//         <img src="/assets/images/banner1.jpg" style={{ width: '100%', height: '150px' }} />
//         <div>
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//               <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
//                 <div className="navbar-nav">
//                 <Link to="/HomeEmp" className="nav-item nav-link">
//                     Home
//                   </Link>
//                 <Link to="/HomeEmp/" className="nav-item nav-link">
//                     TrainingData
//                   </Link>
//                   <Link to="/HomeEmp/TrainingRegistration" className="nav-item nav-link">
//                   TrainingRegistration
//                   </Link>
                  
//                   <Link to="/HomeEmp/Attendance2" className="nav-item nav-link">
//                     Attendance
//                   </Link>
//                   <Link to="/HomeEmp/FeedBack" className="nav-item nav-link">
//                   GiveFeedBack
//                   </Link><br/>
        
//                  </div>
//                 {/* <form name="myform" className="d-flex">
//                   <div className="input-group">
//                     <input type="text" name="data" style={{ width: '500px' }} className="form-control" placeholder="Search" />
//                     <button type="button" onClick={NoMethod} className="btn btn-info">
//                       Search
//                     </button>
//                   </div>
//                 </form> */}
//                 <div className="navbar-nav">
//                   {isUserLoggedIn ? (
//                     <li>
//                       <Link className="nav-item nav-link" to="/Logout">
//                         Logout
//                       </Link>
//                     </li>
//                   ) : (
//                     <li>
//                       <Link className="nav-item nav-link" to="/LoginRadio">
//                         Login
//                       </Link>
//                     </li>
//                   )}
//                 </div>
//               </div>
//               {isUserLoggedIn ? (
//                 <div className="btn btn-success">Welcome : {sessionStorage.getItem('uid')}</div>
//               ) : (
//                 <div className="btn btn-info">Welcome Guest</div>
//               )}
//             </div>
//           </nav>
//           <div style={{ marginTop: '100px', marginLeft: '150px' }}>
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Employee;
