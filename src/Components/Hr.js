import React, { useEffect } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Hr = () => {
  const ob = useNavigate();

  useEffect(() => {
    Comp();
  }, []);

  const NoMethod = () => {
    const data = document.forms['myform'].elements.data.value;
    ob({
      pathname: '/Search',
      search: `?fname=${data}`,
    });
  };

  const Comp = () => {
    if (sessionStorage.getItem('uid') != null) {
      return <Outlet />;
    } else {
      ob('/LoginRadio');
      return null; // Add this line to handle the case when navigating to '/LoginRadio'
    }
  };

  const userRole = sessionStorage.getItem('userRole');
  const isUserLoggedIn = sessionStorage.getItem('uid') !== null;

  return (
    <div>
      <div>
        <img src="/assets/images/banner1.jpg" style={{ width: '100%', height: '150px' }} />
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link to="/TrainingData" className="navbar-brand">
                TrainingData
              </Link>

              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav">
                  <Link to="/TrainingData" className="nav-item nav-link">
                    TrainingData
                  </Link>
                  <Link to="/ViewFeedBack" className="nav-item nav-link">
                    FeedBack
                  </Link>
                  {isUserLoggedIn ? null : ( // Display Login link only if not logged in
                    <Link to="/LoginRadio" className="nav-item nav-link">
                      Login
                    </Link>
                  )}
                </div>
                <form name="myform" className="d-flex">
                  <div className="input-group">
                    <input type="text" name="data" style={{ width: '500px' }} className="form-control" placeholder="Search" />
                    <button type="button" onClick={NoMethod} className="btn btn-info">
                      Search
                    </button>
                  </div>
                </form>

                <div className="navbar-nav">
                  {isUserLoggedIn ? (
                    <li>
                      <Link className="nav-item nav-link" to="/Logout">
                        Logout
                      </Link>
                    </li>
                  ) : null}
                </div>
              </div>
              {isUserLoggedIn ? (
                <div className="btn btn-success">Welcome : {sessionStorage.getItem('uid')}</div>
              ) : (
                <div className="btn btn-info">Welcome Guest</div>
              )}
            </div>
          </nav>
          <div style={{ marginTop: '100px', marginLeft: '150px' }}>
            {isUserLoggedIn && ( // Only render if the user is logged in
              <div>
                <Comp></Comp>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hr;
