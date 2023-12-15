import React, { useState } from 'react';

const EditTraining = () => {
  const qp = new URLSearchParams(window.location.search);
  const [trainingId, setTrainingId] = useState(qp.get("c"));
  const [courseName, setCourseName] = useState(qp.get("f"));
  const [description, setDescription] = useState(qp.get("l"));
  const [startDate, setStartDate] = useState(qp.get("m"));
  const [endDate, setEndDate] = useState(qp.get("i"));

  const updateTraining = () => {
    const jsonData = {
      "TrainingId": trainingId,
      "CourseName": courseName,
      "Description": description,
      "StartDate": startDate,
      "Enddate": endDate,
    };

    fetch('https://localhost:7011/api/edittd', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Training data updated successfully");
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
    <div style={{color:"white"}}>
      <form name="myform">
        <label>Training ID</label>
        <input type="text" name="cid" value={trainingId} className="form-control" readOnly />

        <label>Course Name</label>
        <input
          type="text"
          name="firstname"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="form-control"
        />

        <label>Description</label>
        <input
          type="text"
          name="lastname"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />

        <label>Start Date</label>
        <input
          type="text"
          name="mobile"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="form-control"
        />

        <label>End Date</label>
        <input
          type="text"
          name="image"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
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

export default EditTraining;
