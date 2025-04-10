import React, { useState } from 'react';
import axios from 'axios';

function JobForm({ onAdd }) {
  const [job, setJob] = useState({
    company: '',
    role: '',
    status: 'Applied',
    appliedDate: '',
    link: ''
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://your-backend-url/api/jobs', job);
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="company" onChange={handleChange} placeholder="Company" required />
      <input name="role" onChange={handleChange} placeholder="Role" required />
      <select name="status" onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input type="date" name="appliedDate" onChange={handleChange} required />
      <input name="link" onChange={handleChange} placeholder="Link" />
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;
