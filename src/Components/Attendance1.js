import React, { useEffect, useState } from 'react';

const Attendance1 = () => {
  const [attendance, setAttendance] = useState([]);
  const [userId, setUserId] = useState(""); // User ID for which you want to view attendance

  const fetchAttendance = () => {
    // Replace with the appropriate URL to fetch attendance for a specific user
    fetch(`https://localhost:7011/api/attbyuserid?id=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setAttendance(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchAttendance();
  }, [userId]);

  return (
    <div style={{color:"white"}}>
      <h1>View Attendance</h1>
      <label htmlFor="userId">User ID:</label>
      <input
        type="text"
        id="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button className='btn btn-success' onClick={fetchAttendance}>View Attendance</button>

      {attendance.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Attendance ID</th>
              <th>Employee ID</th>
              <th>Training ID</th>
              <th>Date</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record) => (
              <tr key={record.attendenceId}>
                <td>{record.attendenceId}</td>
                <td>{record.employeeId}</td>
                <td>{record.trainingId}</td>
                <td>{record.date}</td>
                <td>{record.Attendence1 ? '0' : '1'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No attendance records found.</p>
      )}
    </div>
  );
};

export default Attendance1;
