import React from 'react';
import axios from 'axios';

function JobList({ jobs, onUpdate, onDelete }) {
  const updateStatus = async (id, status) => {
    await axios.put(`https://your-backend-url/api/jobs/${id}`, { status });
    onUpdate();
  };

  const deleteJob = async (id) => {
    await axios.delete(`https://your-backend-url/api/jobs/${id}`);
    onDelete();
  };

  return (
    <div>
      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.company} - {job.role}</h3>
          <p>Status: {job.status}</p>
          <p>Applied on: {new Date(job.appliedDate).toLocaleDateString()}</p>
          <a href={job.link} target="_blank" rel="noreferrer">Link</a><br />
          <select onChange={(e) => updateStatus(job._id, e.target.value)} defaultValue={job.status}>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
          <button onClick={() => deleteJob(job._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default JobList;
