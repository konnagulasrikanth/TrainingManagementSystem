import React, { useState } from 'react';
 
const AcceptOrReject = () => {
  const qp = new URLSearchParams(window.location.search);
  const [trainingId, setTrainingId] = useState(qp.get('c'));
  const [employeeId, setEmployeeId] = useState('');
  const [status, setStatus] = useState('');
  const [reason, setReason] = useState('');
 
  const updateTraining = () => {
    const jsonData = {
      TrainingId: parseInt(trainingId),
      EmployeeId: parseInt(employeeId),
      Status: status,
      Reason: reason,
    };
 
    fetch('https://localhost:7011/api/addtr/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Training registration updated by manager successfully');
        } else {
          alert('Failed to update training data');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('An unexpected error occurred');
      });
  };
 
  return (
    <div>
      <form name="myform">
        <label>Training ID</label>
        <input type="text" name="tid" value={trainingId} className="form-control" readOnly />
 
        <label>Employee ID</label>
        <input
          type="text"
          name="employeeId"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          className="form-control"
        />
 
        <label>Status</label>
        <input
          type="text"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="form-control"
        />
 
        <label>Reason</label>
        <input
          type="text"
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="form-control"
        />
 
        <input
          type="button"
          value="Update Training"
          onClick={updateTraining}
          className="btn btn-primary"
        />
      </form>
    </div>
  );
};
 
export default AcceptOrReject;
 