import React from 'react';
import EditIcon from '../utils/UI/EditIcon';

function Profile() {
  return (
    <div className="flex justify-center mt-5 ">
      <div className="flex flex-col justify-start items-start w-10/12 xl:w-[33%] h-screen ">
        <div className="w-full h-32 bg-white flex items-center">
          <div className="rounded-full border-blue-700 border-4 text-black font-extrabold text-2xl w-20 h-20 flex justify-center items-center">
            <h1>AN</h1>
          </div>
          <div className="flex flex-col space-y-2 pl-5">
            <h1 className="text-2xl font-bold">Amit Nair</h1>
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>

              <h1 className="ml-2">Ho Chi Minh City</h1>
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg border border-gray-300 h-44 mt-10 pl-3 relative">
          <div className="font-semibold text-lg my-2">Contact Information</div>
          <div className="text-gray-600 space-y-1 pt-2">
            <div>Armit Nair</div>
            <div>abcdxyz123@gmail.com</div>
            <div>12345678911</div>
          </div>
          <EditIcon />
        </div>
        <div className="w-full relative rounded-lg  border border-gray-300 h-44 mt-10 pl-3">
          <div className="font-semibold text-lg my-2">Personal Information</div>
          <div className="text-gray-600 space-y-1 pt-2">
            <div>Ho Chi Minh City</div>
            <div>FPT University</div>
            <div>Front-end Developer</div>
          </div>
          <EditIcon />
        </div>
        <div className="w-full relative rounded-lg border border-gray-300 h-fit pb-5 mt-10 pl-3">
          <div className="font-semibold text-lg my-2">Project Preferences</div>
          <div className="text-gray-600 space-y-1 pt-2 w-10/12">
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              harum quasi deleniti blanditiis nihil minus? Vero necessitatibus
              officia quis illo ullam pariatur dicta quas? Labore nemo
              exercitationem vitae quas quasi?
            </div>
          </div>
          <EditIcon />
        </div>
      </div>
    </div>
  );
}

export default Profile;
