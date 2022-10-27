import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import FindProjects from '../pages/findProjects';
import Login from '../pages/login';
import Notification from '../pages/notification';
import Postjob from '../pages/Postjob';
import Profile from '../pages/Profile';
import ProjectDetails from '../pages/projectDetails';
import { fetchProject } from '../utils/functions/fetchProject';
import data from '../utils/functions/testing';
import JobFull from './JobPage/JobFull';

function Main() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {/* <Route path="/" element={<Container />}></Route>
      <Route path="/detail/:id" element={<Detail />}></Route> */}
      <Route path="/login" element={<Login />}></Route>
      <Route path="/findProject" element={<FindProjects />}></Route>
      <Route path="/findProject/:id" element={<ProjectDetails />}></Route>
      <Route path="/postjob" element={<Postjob />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/notification" element={<Notification />}></Route>
    </Routes>
  );
}

export default Main;
