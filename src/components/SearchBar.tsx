import React from 'react';

function SearchBar() {
  return (
    <div className="w-9/12 h-60 xl:h-40 flex items-center ">
      <div className="inline-grid grid-cols-1 xl:grid-cols-7 gap-5 w-full text-center justify-around content-center">
        <input
          type="text"
          className="w-full h-12 border border-gray-500 rounded-lg mr-3 pl-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center xl:col-span-3 focus:shadow-md"
          placeholder="Search for projects"
        />

        <input
          type="text"
          className="w-full h-12 border border-gray-500 rounded-lg mr-3 pl-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center xl:col-span-3 focus:shadow-md"
          placeholder="Search for school"
        />
        <button className="w-full xl:w-32 h-12 bg-blue-800 font-semibold text-white rounded-lg p-5 hover:bg-blue-900 transition-all flex justify-center items-center self-center hover:shadow-md">
          Find Project
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
