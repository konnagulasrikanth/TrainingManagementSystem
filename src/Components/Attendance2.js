import React, { useRef, useState } from 'react';
 
const Attendance2 = () => {
  const EmployeeId = useRef('');
  const Trainingid = useRef('');
  const MarkAttendence = useRef('');
  const [date, setDate] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
 
 
  const AddRecord = () => {
    const jsonData = {
      "EmployeeId": EmployeeId.current.value,
      "Trainingid": Trainingid.current.value,
      "Date": date,
      "att": MarkAttendence.current.value
    };
   
 
    console.log(jsonData);
 
 
  fetch(`https://localhost:7011/api/attbyuserid?employeeId=${jsonData.EmployeeId}&date=${jsonData.Date}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.attendanceGiven) {
          alert('Attendance already marked for this candidate on this date.');
        } else {
  fetch('https://localhost:7011/api/attadduser', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
          })
            .then((response) => {
              alert('Attendance marked successfully.');
              console.log(response);
              setIsButtonDisabled(true);
            })
            .catch((error) => {
              alert('Failed to mark attendance.');
              console.error(error);
            });
        }
      })
      .catch((error) => {
        alert('Error while checking attendance.');
        console.error(error);
      });
};
 
  const handleDateChange = () => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  };
 
  return (
    <div style={{color:"white",width:"50%"}}>
      <label>Enter EmployeeId</label>
      <input type="text" ref={EmployeeId} className='form-control'/>
      <label>Enter TrainingId</label>
      <input type="text" ref={Trainingid} className='form-control' />
      <label>Enter Date</label>
      <input
        type="text"
        value={date}
        readOnly
        className='form-control'
      />
      <button onClick={handleDateChange}>Set Today's Date</button>
      <label>enter Attendance</label>
      <input type="number" ref={MarkAttendence} className='form-control' />
      <input
        type="submit"
        value="Attendance"
        className='btn btn-primary'
        onClick={AddRecord}
        disabled={isButtonDisabled}
      />
    </div>
  );
};
 
export default Attendance2;