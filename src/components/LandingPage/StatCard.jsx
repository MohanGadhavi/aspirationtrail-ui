import * as React from "react";

export default function StatCard({ number, label }) {
  return (
    <div
      className={
        "p-10 flex flex-col items-center bg-teal-800 rounded-xl text-green-100 "
      }
    >
      <div className="text-5xl leading-none">{number}</div>
      <div className="mt-2.5 text-base text-center text-zinc-600">{label}</div>
    </div>
  );
}
