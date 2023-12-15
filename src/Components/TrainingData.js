import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 
const TrainingData = () => {
  const [TrainingData, setTrainingData] = useState([]);
 
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
      setTrainingData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div style={{color:"white"}}>
      <h1>Training Data</h1>
      <table border="1" >
        <thead>
          <tr>
            <th> CourseName </th>
            <th>Description </th>
            <th>StartDate</th>
            <th>EndDate </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {TrainingData.map((i) => (
            <tr key={i.trainingId}>
                <td>{i.courseName}</td>
              <td>{i.description}</td>
              <td>{i.startDate}</td>
              <td>{i.enddate}</td>
              <td>
              <Link  to={'/HrHome/EditTraining?c='+ i.trainingId + '&f=' + i.courseName + '&l=' + i.description + '&m=' + i.startDate + '&i=' + i.enddate} className="btn btn-success">Edit</Link>
                <Link  to={'/HrHome/DeleteTraining?c='+ i.trainingId } className="btn btn-success">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     <center><Link to={`/HrHome/TrainingData/AddTr`} className="btn btn-success">AddTrainingData</Link></center>
 
    </div>
  );
};
 
export default TrainingData;