import * as React from 'react';

export default function HowItWorksCard({ title, description }) {
  return (
    <div className="flex flex-col items-start max-md:mt-10">
      <div className="flex shrink-0 bg-white rounded-full h-[72px] w-[72px]" />
      <div className="mt-5 text-2xl font-semibold leading-none text-white">
        {title}
      </div>
      <div className="self-stretch mt-1.5 text-lg leading-7 text-zinc-300">
        {description}
      </div>
    </div>
  );
}
