import React from 'react';
import { useParams } from 'react-router-dom';
import JobDescription from '../components/JobPage/JobDescription';
import JobFull from '../components/JobPage/JobFull';
import SearchBar from '../components/SearchBar';
import data from '../utils/functions/testing';

function ProjectDetails() {
  const jobData = useParams();
  const project = data.find((obj) => {
    return obj._id === jobData.id;
  });

  return (
    <div className="flex flex-col items-center h-full justify-start">
      <div className="w-full h-full justify-center hidden xl:flex">
        <SearchBar />
      </div>

      <div className="w-full border-t border-t-gray-200 h-full flex justify-center">
        <div className="w-9/12 h-full flex justify-start mt-5 pt-10">
          <JobFull
            jobName={project?.Project_Name}
            email={project?.User_Email}
            school={project?.User_University}
            city={project?.Project_Location}
            time={project?.Post_Date}
            numberOfPeople={project?.Member_Amount}
            typeOfJob={project?.Project_Field}
          />
          <JobDescription desc={project?.Post_Date} />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
