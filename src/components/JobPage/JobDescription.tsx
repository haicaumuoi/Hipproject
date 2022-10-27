import React from 'react';

interface jobFullProps {
  desc: string | undefined;
}

function JobDescription({ desc }: jobFullProps) {
  return (
    <div className="w-full mt-5 xl:mt-0 xl:w-1/2 h-full xl:pl-10 xl:border-l border-l-gray-300">
      <h1 className="font-bold text-2xl mb-5">Project Description</h1>
      {desc}
    </div>
  );
}

export default JobDescription;
