import React from 'react';
import { Link } from 'react-router-dom';
import data from '../utils/functions/testing';

function Projects() {
  return (
    <div className="w-screen h-fit bg-gray-50 flex justify-center items-center my-20">
      <div className="w-9/12 h-5/6">
        <div className="w-full h-20 shadow flex px-10 items-center">
          <h1 className="font-semibold text-2xl pr-5">Project Joined</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
            />
          </svg>
        </div>
        <div>
          {data.map((item) => (
            <div className="w-full h-20 shadow-sm flex justify-between px-10 my-5 items-center">
              <div className="font-semibold text-xl">{item.Project_Name}</div>
              <div className="flex">
                <p className="pr-10">
                  By {item.User_Email} on {item.Post_Date}
                </p>
                <Link to={`/findProject/${item._id}`}>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Check Project
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
