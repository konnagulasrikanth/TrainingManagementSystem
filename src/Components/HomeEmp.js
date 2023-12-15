import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeEmp = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const isUserLoggedIn = sessionStorage.getItem('uid') !== null;

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const url = 'https://localhost:7011/api/db7/';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setEmployeeData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{color:"white"}}>
  <div> {isUserLoggedIn && (
      <div><h1>Welcome Employee : {sessionStorage.getItem('uid')}</h1></div>
    )}</div>
    </div>
  );
};

export default HomeEmp;
