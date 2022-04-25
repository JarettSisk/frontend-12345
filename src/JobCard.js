import React from "react";
import "./JobCard.css";

const JobCard = ({ title, equity, salary }) => {
  return (
    <div className="JobCard">
      <h3>{title}</h3>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button>Apply</button>
    </div>
  )
}

export default JobCard;