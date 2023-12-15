import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditEmployee = () => {
  const qp = new URLSearchParams(window.location.search);
  const [employeeId, setEmployeeId] = useState(qp.get("c"));
  const [employeeName, setEmployeeName] = useState(qp.get("f"));
  const [email, setEmail] = useState(qp.get("l"));
  const [mobile, setMobile] = useState(qp.get("m"));
  const [managerId, setManagerId] = useState(qp.get("i"));
  const ob = useNavigate();

  const updateEmployee = () => {
    const jsonData = {
      "EmployeeId": employeeId,
      "EmployeeName": employeeName,
      "Email": email,
      "Mobile": mobile,
      "ManagerId": managerId,
    };

    fetch('https://localhost:7011/api/edit', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    })
    .then((response) => {
      if (response.ok) {
        // alert("Training data updated successfully");
        ob("/HrHome/EmployeeData")
      } else {
        alert("Failed to update training data");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("An unexpected error occurred");
    });
};


  return (
    <div style={{ color: "white",width:"50%" }}>
      <form name="myform">
        <label>Employee ID</label>
        <input type="text" name="cid" value={employeeId} className="form-control" readOnly />

        <label>Employee Name</label>
        <input
          type="text"
          name="firstname"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          className="form-control"
        />

        <label>Email</label>
        <input
          type="text"
          name="lastname"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />

        <label>Mobile</label>
        <input
          type="text"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="form-control"
        />

        <label>Manager ID</label>
        <input
          type="text"
          name="image"
          value={managerId}
          onChange={(e) => setManagerId(e.target.value)}
          className="form-control"
        />
        <input
          type="button"
          value="Update Employee"
          onClick={updateEmployee}
          className="btn btn-primary"
        />
      </form>
    </div>
  );
};

export default EditEmployee;
