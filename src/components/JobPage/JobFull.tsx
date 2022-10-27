import React from 'react';

interface jobFullProps {
  jobName: string | undefined;
  email: string | undefined;
  school: string | undefined;
  city: string | undefined;
  time: string | undefined;
  numberOfPeople: string | undefined;
  typeOfJob: string | undefined;
}

function JobFull({
  jobName,
  email,
  school,
  city,
  time,
  numberOfPeople,
  typeOfJob,
}: jobFullProps) {
  return (
    <div className="w-full xl:w-1/2 my-1 h-full xl:pr-10 space-y-2">
      <div className="text-2xl font-bold mb-1">{jobName}</div>
      <div className="text-blue-800">{email}</div>
      <div>{city}</div>
      <div>{time}</div>
      {/* <Link href={link}> */}
      <button className="w-56 xl:w-72 xl:h-10 h-12 bg-blue-800 font-bold text-white rounded-lg p-5 hover:bg-blue-900 transition-all flex justify-center items-center self-center hover:shadow-md">
        Apply Now
      </button>
      {/* </Link> */}
      <div className="text-xl font-semibold my-3">Project Details</div>
      <div className="font-semibold mb-2">School</div>
      <div> {school}</div>
      <div className="font-semibold my-2 ">Number Of People in Group</div>
      <div>{numberOfPeople}</div>
      <div className="font-semibold my-2">Type Of Job</div>
      <div>{typeOfJob}</div>
    </div>
  );
}

export default JobFull;
