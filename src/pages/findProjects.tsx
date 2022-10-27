import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/JobPage/ProjectCard';
import SearchBar from '../components/SearchBar';
import { fetchProject } from '../utils/functions/fetchProject';
import { Project } from '../../typing';

import dateFormat from '../utils/functions/dateFormat';
import data from '../utils/functions/testing';
import { Link } from 'react-router-dom';

type Props = {
  projects: Project[];
};

const FindProjects = () => {
  // const [projects, setProjects] = useState<Project[]>([]);
  return (
    <div className="flex flex-col items-center h-full justify-start">
      <SearchBar />
      <div className="w-full border-t border-t-gray-400 h-full flex justify-center items-center mt-5 pt-10">
        <ul className="w-9/12 h-full flex flex-col items-center xl:w-8/12 justify-center xl:grid xl:grid-cols-2 2xl:grid-cols-3 2xl:w-10/12">
          {data.map((project) => (
            <div key={project._id}>
              <Link to={`/findProject/${project._id}`}>
                <ProjectCard
                  key={project._id}
                  projectId={project._id}
                  projectName={project.Project_Name}
                  projectCity={project.Project_Location}
                  projectSchool={project.User_University}
                  // projectTime={`${dateFormat(project.Post_Date)} - ${dateFormat(
                  //   project.End_Date
                  // )}`}
                  projectTime={'1/1/2021 - 1/1/2021'}
                  projectField={project.Project_Field}
                  projectSkills={project.Project_Skill}
                  projectCriteria1="abc"
                  projectCriteria2="abc"
                  projectCriteria3="abc"
                />
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FindProjects;
