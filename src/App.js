// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => {
        console.error('Error fetching jobs:', error);
        // Fallback mock data in case backend is not running
        setJobs([
          { id: 1, company: 'Google', role: 'Software Engineer', status: 'Applied' },
          { id: 2, company: 'Amazon', role: 'Backend Developer', status: 'Interview' },
          { id: 3, company: 'Microsoft', role: 'Frontend Developer', status: 'Offer' },
          { id: 4, company: 'Meta', role: 'UI/UX Designer', status: 'Rejected' },
          { id: 5, company: 'Netflix', role: 'DevOps Engineer', status: 'Applied' },
          { id: 6, company: 'Tesla', role: 'Data Scientist', status: 'Interview' },
          { id: 7, company: 'Apple', role: 'Mobile Developer', status: 'Offer' },
          { id: 8, company: 'Adobe', role: 'QA Engineer', status: 'Pending' },
          { id: 9, company: 'Infosys', role: 'Java Developer', status: 'Rejected' },
          { id: 10, company: 'TCS', role: 'Full Stack Developer', status: 'Interview' },
        ]);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📋 Job Applications</h1>
      {jobs.map((job) => (
        <div key={job.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Role:</strong> {job.role}</p>
          <p><strong>Status:</strong> {job.status}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

