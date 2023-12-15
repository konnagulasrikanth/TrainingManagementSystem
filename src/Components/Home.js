import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const url = 'https://localhost:7011/api/db1/';
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
    <div>
      <h1>Welcome Home </h1>
      <table border="1">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>User ID</th>
            <th>Manager ID</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>{employee.userId}</td>
              <td>{employee.managerId}</td>
              <td>{employee.employeeName}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>
                <Link to={`/EditContact?c=${employee.employeeId}&f=${employee.employeeName}&l=${employee.email}&m=${employee.mobile}&i=${employee.managerId}`} className="btn btn-success">EditEmployee</Link>
                <Link to={`/DeleteContact?c=${employee.employeeId}`} className="btn btn-danger">DeleteEmployee</Link>
                <button className='btn btn-warning'>UpdateEmployee</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
