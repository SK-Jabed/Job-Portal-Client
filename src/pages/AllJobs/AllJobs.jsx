import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobCard from '../Home/FeaturedJobCard';

const AllJobs = () => {
    const jobs = useLoaderData();
    const [sort, setSort] = useState(false);
    
    console.log(sort);

    return (
      <div>
        All Jobs are here: {jobs.length}
        <div className="text-center">
          <button
            onClick={() => setSort(!sort)}
            className={`btn btn-neutral ${sort && "btn-success"}`}
          >
            {sort == true ? "Sorted By Salary" : "Sort By Salary"}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobs.map((job) => (
            <FeaturedJobCard key={job._id} job={job}></FeaturedJobCard>
          ))}
        </div>
      </div>
    );
};

export default AllJobs;