import React from 'react';
import { Fragment, useState } from 'react';
import { Listbox, Transition, Combobox } from '@headlessui/react';
// import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import logo from '../assets/logos/logo.png';

import 'react-datepicker/dist/react-datepicker.css';
import { fetchProject } from '../utils/functions/fetchProject';

function Postjob() {
  const fields = [
    { id: 1, name: 'Computer Science', unavailable: true },
    { id: 2, name: 'Information Technology', unavailable: false },
    { id: 3, name: 'Electrical Engineering', unavailable: false },
    { id: 4, name: 'Mechanical Engineering', unavailable: false },
    { id: 5, name: 'Chemical Engineering', unavailable: false },
    { id: 6, name: 'Computer Science', unavailable: false },
    { id: 7, name: 'Information Technology', unavailable: false },
    { id: 8, name: 'Electrical Engineering', unavailable: false },
    { id: 9, name: 'Mechanical Engineering', unavailable: false },
    { id: 10, name: 'Chemical Engineering', unavailable: false },
    { id: 11, name: 'Computer Science', unavailable: false },
    { id: 12, name: 'Information Technology', unavailable: false },
    { id: 13, name: 'Electrical Engineering', unavailable: false },
    { id: 14, name: 'Mechanical Engineering', unavailable: false },
    { id: 15, name: 'Chemical Engineering', unavailable: false },
  ];

  const [selectedField, setSelectedField] = useState(fields[0]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 1));

  const [name, setName] = useState('');
  const [uni, setUni] = useState('');
  const [location, setLocation] = useState('');
  const [skill, setSkill] = useState('');
  const [desc, setDesc] = useState('');

  const jobField = selectedField.name;

  const dataReturn = {
    name,
    uni,
    location,
    jobField,
    startDate,
    endDate,
    desc,
    skill,
  };

  fetchProject();

  return (
    <div className="flex justify-center mt-20">
      <div className="flex justify-between w-8/12 h-screen ">
        <div className="space-y-5 font-semibold text-lg xl:w-7/12">
          <div className=" text-4xl ">Create a project</div>
          <div>
            <h1>Your Project Name</h1>
            <input
              className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
              type="text"
              required
              placeholder='e.g. "Build a website for my business"'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <h1>Project University</h1>
            <input
              className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
              type="text"
              required
              placeholder='e.g. "University of Toronto"'
              value={uni}
              onChange={(e) => setUni(e.target.value)}
            />
          </div>
          <div>
            <h1>Project Location</h1>
            <input
              className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
              type="text"
              required
              placeholder='e.g. "Toronto, ON'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <h1>Time to finish </h1>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              minDate={startDate}
              endDate={endDate}
              className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
            />
            <DatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              selectsEnd
              startDate={addDays(startDate, 1)}
              endDate={endDate}
              maxDate={addDays(new Date(), 100)}
              minDate={startDate}
              className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
            />
          </div>
          <div className="border border-black">
            <div>
              <h1>Field Needed</h1>
              <Listbox value={selectedField} onChange={setSelectedField}>
                <div className="relative bg-gray-100 flex justify-start items-center border border-black rounded-lg h-12 w-full xl:w-11/12 mt-2 ">
                  <Listbox.Button className="relative w-full bg-gray-100 cursor-default rounded-lg  py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selectedField.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      {/* <ChevronDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      /> */}
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute top-12 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm overflow-x-hidden">
                      {fields.map((field, fieldIdx) => (
                        <Listbox.Option
                          key={fieldIdx}
                          className={({ active }) =>
                            `relative cursor-pointer select-none py-2 pl-10 pr-4 flex justify-between hover:scale-105 transition duration-150 ${
                              active
                                ? 'bg-amber-100 text-amber-900'
                                : 'text-gray-900'
                            }`
                          }
                          value={field}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {field.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  {/* <CheckIcon
                                    className="h-5 w-5 "
                                    aria-hidden="true"
                                  /> */}
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div>
              <h1>Position Needed</h1>
              <input
                className="font-normal text-base border border-black rounded-lg h-10 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center  xl:col-span-3 focus:shadow-md pl-3"
                type="text"
                required
                placeholder='e.g. "React, Excel, Photoshop, etc."'
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
              />
            </div>
            <button>Add Field</button>
          </div>
          <div></div>
          <div>
            <h1>Project Description </h1>
            <textarea
              className="font-normal text-base border border-black rounded-lg h-24 w-full xl:w-11/12 mt-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 self-center xl:col-span-3 focus:shadow-md pl-3"
              required
              placeholder='e.g. "I need a website for my business that is easy to use and looks good."'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              console.log(dataReturn);
            }}
            className="w-11/12 h-12 bg-blue-800 font-semibold text-white rounded-lg p-5 hover:bg-blue-900 transition-all flex justify-center items-center self-center hover:shadow-md "
          >
            <h1 className="mr-2">Post Job</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-[0.15rem]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="hidden xl:flex justify-end items-center">
          <img src={logo} alt="logos" className="w-96 h-96" />
        </div>
      </div>
    </div>
  );
}

export default Postjob;
