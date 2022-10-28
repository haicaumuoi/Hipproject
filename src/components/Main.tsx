import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import FindProjects from '../pages/findProjects';
import Login from '../pages/login';
import Notification from '../pages/notification';
import Postjob from '../pages/Postjob';
import Profile from '../pages/Profile';
import ProjectDetails from '../pages/projectDetails';
import Projects from '../pages/Projects';
import { fetchProject } from '../utils/functions/fetchProject';
import data from '../utils/functions/testing';
import JobFull from './JobPage/JobFull';

function Main() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/Hipproject" element={<Main />}></Route>
      <Route path="/Hipproject/login" element={<Login />}></Route>
      <Route path="/Hipproject/projects" element={<Projects />}></Route>
      <Route path="/Hipproject/findProject" element={<FindProjects />}></Route>
      <Route
        path="/Hipproject/findProject/:id"
        element={<ProjectDetails />}
      ></Route>
      <Route path="/Hipproject/postjob" element={<Postjob />}></Route>
      <Route path="/Hipproject/profile" element={<Profile />}></Route>
      <Route path="/Hipproject/notification" element={<Notification />}></Route>
    </Routes>
  );
}

export default Main;
