import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ManagerData = () => {
  const [managerData, setManagerData] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const url = 'https://localhost:7011/api/db3/'; 
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch manager data');
      }
      const data = await response.json();
      setManagerData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{color:"white"}}>
      <h1>Manager Data</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Manager ID</th>
            <th>User ID</th>
            <th>Manager Name</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {managerData.map((manager) => (
            <tr key={manager.managerId}>
              <td>{manager.managerId}</td>
              <td>{manager.userId}</td>
              <td>{manager.managerName}</td>
              {/* <td>
                <Link to={`/EditManager?c=${manager.managerId}&f=${manager.userId}&l=${manager.managerName}`} className="btn btn-success">EditManager</Link>
                <Link to={`/DeleteManager?c=${manager.managerId}`} className="btn btn-danger">DeleteManager</Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerData;
