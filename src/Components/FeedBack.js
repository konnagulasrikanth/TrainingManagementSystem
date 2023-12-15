import React, { useRef } from 'react';

const FeedBack = () => {
  const employeeId = useRef(null);
  const trainingIdInput = useRef(null);
  const feedbackMessage = useRef(null);

  const addRecord = () => {
    const employeeIdValue = employeeId.current.value;
    const trainingIdValue = trainingIdInput.current.value;
    sendFeedback(feedbackMessage.current.value, employeeIdValue, trainingIdValue);
  };

  const sendFeedback = (message, employeeId, trainingId) => {
    const feedbackData = {
      TrainingId: trainingId,
      EmployeeId: employeeId,
      FbMessage: message,
      FeedbackDate: new Date().toISOString(),
    };

    fetch('https://localhost:7011/api/addfdb/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Feedback submitted successfully');
        } else {
          throw new Error('Failed to submit feedback');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to submit feedback');
      });
  };

  return (
    <div style={{color:"white"}}>
      <div>
        <h1>Feedback For Course Attended</h1>
        <form name="myform">
          {/* ... (previous input fields for user registration) */}
          <label htmlFor="trainingId">TrainingId</label>
          <input
            type="text"
            name="trainingId"
            ref={trainingIdInput}
            placeholder="Enter TrainingId"
          /><br />

          <label htmlFor="employeeId">EmployeeId</label>
          <input
            type="text"
            name="employeeId"
            ref={employeeId}
            placeholder="Enter EmployeeId"
          /><br />

          <label htmlFor="feedbackMessage">Feedback Message</label>
          <textarea
            name="feedbackMessage"
            ref={feedbackMessage}
            placeholder="Enter your feedback message"
          ></textarea>
          <br />

          <input type="button" value="Send Feedback" className='btn btn-primary' onClick={addRecord} />
          <br />
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
