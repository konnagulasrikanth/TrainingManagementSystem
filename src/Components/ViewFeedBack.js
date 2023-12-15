import React, { useState, useEffect } from 'react';

const ViewFeedBack = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);
  
  const fetchFeedback = async () => {
    try {
      const response = await fetch('https://localhost:7011/api/db6/'); // Replace with the actual endpoint for fetching feedback
      if (!response.ok) {
        throw new Error('Failed to fetch feedback data');
      }
      const data = await response.json();
      setFeedbackData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{color:"white"}}>
      <h1>Feedback Data</h1>
      <table border="1">
        <thead>
          <tr>
            <th>FeedBackId</th>
            <th>Training ID</th>
            <th>Employee ID</th>
            <th>Feedback Message</th>
            <th>Feedback Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback) => (
            <tr key={feedback.feedbackId}>
                  <td>{feedback.feedbackId}</td>
              <td>{feedback.trainingId}</td>
              <td>{feedback.employeeId}</td>
              <td>{feedback.fbMessage}</td>
              <td>{new Date(feedback.feedbackDate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewFeedBack;
