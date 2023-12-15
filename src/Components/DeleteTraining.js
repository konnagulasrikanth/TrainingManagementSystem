import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteTraining = () => {
  const navigate = useNavigate();

  function NoMethod() {
    navigate('/Home');
  }

  function DeleteRecord() {
    const qp = new URLSearchParams(window.location.search);
    const trainingId = qp.get("c"); // Update to use "c"

    fetch(`https://localhost:7011/api/deletetd?id=${trainingId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          alert("Training data deleted successfully");
          navigate('/Home'); // Redirect to the Home page or any other desired page after successful deletion
        } else {
          alert("Failed to delete training data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div style={{color:"white"}}>
      <div>
        <h1>Are you sure you want to delete this training data?</h1>
        <div style={{ marginLeft: "300px", padding: "50px" }}>
          <input type="button" value="Yes" className="btn btn-info" onClick={DeleteRecord} />
          <input type="button" value="No" className="btn btn-info" onClick={NoMethod} />
        </div>
      </div>
    </div>
  );
};

export default DeleteTraining;
