import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllJobs = () => {
    const jobs = useLoaderData();

    return (
        <div>
            All Jobs are here: {jobs.length}
            <div>
                {
                    jobs.map(job => <div key={jobs._id}>
                        {jobs.title}
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllJobs;