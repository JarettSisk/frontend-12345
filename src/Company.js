import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCard from "./JobCard";
// API
import JoblyApi from "./api";

const Company = () => {
  let params = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const getCompany = async () => {
      let res = await JoblyApi.getCompany(params.handle);
      setCompany(res);
    }
    getCompany();
  },[])

  const renderJobs = () => {
    return company.jobs.map((j) => {
      return <JobCard key={j.id} title={j.title} equity={j.equity} salary={j.salary}/>
    })
  }

  const renderCompany = () => {
    return (
      <>
        <h1 className="Company-title">{company.name}</h1>
        <p className="Company-description">{company.description}</p>
        <p className="Company-employees">Current employees: {company.numEmployees}</p> 
        <div className="Company-jobs">
          {renderJobs()}
        </div>
      </>
    )
  }

  return (
    <div className="Company">
      {company ? renderCompany() : <h1>Loading</h1>}
    </div>
  )
}

export default Company;