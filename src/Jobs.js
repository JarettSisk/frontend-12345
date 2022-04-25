import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
// API
import JoblyApi from "./api";

const Jobs = () => {

  // Company state
  const [jobs, setJobs] = useState(null); 
  // get and set comanies
  useEffect(() => {
    const getJobs = async () => {
      const res = await JoblyApi.getAllJobs();
      setJobs(res);
    }
    getJobs()

  }, [])
  

  const renderJobs = () => {
    return jobs.map(j => {
      return <JobCard 
        key={j.id} 
        title={j.title} 
        equity={j.equity} 
        salary={j.salary}/>
    })
  }

    return (
    <div className="Companies">
      {jobs ? renderJobs() : <h2>Loading</h2>}
    </div>
    )
  }

export default Jobs;