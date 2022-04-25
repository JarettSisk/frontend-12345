import React from "react";
import "./CompanyCard.css";
import { Link } from "react-router-dom";

const CompanyCard = ({ handle, name, description, logoUrl }) => {
  return (
    <Link className="CompanyCard-link" to={`/companies/${handle}`}>
      <div className="CompanyCard">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default CompanyCard;