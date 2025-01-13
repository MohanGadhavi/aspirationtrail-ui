import * as React from "react";

export default function StatCard({ number, label, highlighted = false }) {
  const containerClass = `flex flex-col items-center self-stretch ${
    highlighted ? "px-16 py-16 bg-white" : "my-auto"
  } max-md:px-5`;

  return (
    <div className={containerClass}>
      <div className="text-5xl leading-none text-black max-md:text-4xl">
        {number}
      </div>
      <div className="mt-2.5 text-base text-center text-zinc-600">{label}</div>
    </div>
  );
}
