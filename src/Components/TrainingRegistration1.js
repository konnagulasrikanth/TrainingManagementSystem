import React, { useState, useEffect } from 'react';

const TrainingRegistration1 = () => {
  const [trainingData, setTrainingData] = useState([]);
  const [appliedCourses, setAppliedCourses] = useState([]);
  const [showAppliedCourses, setShowAppliedCourses] = useState(false);
  const employeeId = sessionStorage.getItem('employeeId');

  useEffect(() => {
    fetchTrainingData();
  }, []);

  const fetchTrainingData = async () => {
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

  const isCourseDisabled = (startDate, endDate) => {
    if (appliedCourses.length > 0) {
      for (const appliedCourse of appliedCourses) {
        if (
          (startDate >= appliedCourse.startDate && startDate <= appliedCourse.endDate) ||
          (endDate >= appliedCourse.startDate && endDate <= appliedCourse.endDate)
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const handleApply = async (trainingId, courseName, description, startDate, endDate) => {
    if (!appliedCourses.some((course) => course.trainingId === trainingId)) {
      // Apply for the course
      const appliedCourse = { trainingId, courseName, startDate, endDate, employeeId };

      try {
        const response = await fetch('https://localhost:7011/api/appendAT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(appliedCourse),
        });

        if (!response.ok) {
          throw new Error('Failed to apply for the course');
        }

        setAppliedCourses([...appliedCourses, appliedCourse]);
        setShowAppliedCourses(true);

        // TODO: Add any additional logic after successful registration
      } catch (error) {
        console.log(error);
        // TODO: Handle the error, display a message to the user, etc.
      }
    }
  };

  return (
    <div style={{ color: 'white' }}>
      <h1>Training Data</h1>
      <table border="1">
        <thead>
          <tr>
            <th>CourseName</th>
            <th>Description</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainingData.map((item) => (
            <tr key={item.trainingId}>
              <td>{item.courseName}</td>
              <td>{item.description}</td>
              <td>{item.startDate}</td>
              <td>{item.enddate}</td>
              <td>
                <button
                  onClick={() =>
                    handleApply(
                      item.trainingId,
                      item.courseName,
                      item.description,
                      item.startDate,
                      item.enddate
                    )
                  }
                  disabled={isCourseDisabled(item.startDate, item.enddate)}
                  className="btn btn-success"
                >
                  Apply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAppliedCourses && (
        <div>
          <h2>Applied Courses</h2>
          <ul>
            {appliedCourses.map((course) => (
              <li key={course.trainingId}>
                Training ID: {course.trainingId},Course Id: {course.CourseId}, Course Name: {course.courseName}, Start Date: {course.startDate}, End Date: {course.endDate}
              </li>
            ))}
          </ul>
        </div>
      )}

      <br /> <br />
    </div>
  );
};

export default TrainingRegistration1;
