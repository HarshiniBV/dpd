import React from 'react';
import './Filter.css'

function Filters({ filters, handleChange, handleSubmit }) {
  return (
    <form className="filters" onSubmit={handleSubmit}>
      <div className="dropdown m-2 pt-4">
        <select name="Type" value={filters.Type} onChange={handleChange} className="btn dropdown-button">
          <option value="">Select Type</option>
          <option value="BTech-Major">BTech-Major</option>
          <option value="MTech-Major">MTech-Major</option>
        </select>
      </div>
      <div className="dropdown m-2">
        <select name="Department" value={filters.Department} onChange={handleChange} className="btn dropdown-button">
          <option value="">Select Branch</option>
          <option value="IT">IT</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
        </select>
      </div>
      <div className="dropdown m-2">
        <select name="Year" value={filters.Year} onChange={handleChange} className="btn dropdown-button">
          <option value="">Select Year</option>
          <option value="2020">2020</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <button type="submit" className="btn btn-danger m-2">Filter</button>
    </form>
  );
}

export default Filters;
