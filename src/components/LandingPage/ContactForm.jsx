import * as React from "react";

export default function ContactForm() {
  return (
    <form className="flex flex-col items-start self-stretch my-auto max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-semibold leading-none text-black">
        Need Support
      </h2>
      <p className="mt-2.5 text-lg leading-none text-zinc-600">
        Contact professionals for guidance
      </p>

      <label
        htmlFor="name"
        className="z-10 mt-8 ml-5 text-sm leading-none text-teal-800 max-md:ml-2.5"
      >
        Your Name
      </label>
      <input
        id="name"
        type="text"
        className="flex flex-col justify-center items-start self-stretch px-5 py-4 rounded-md border border-teal-800 border-solid max-md:pr-5 max-md:max-w-full"
      />

      <label
        htmlFor="email"
        className="z-10 mt-5 ml-5 text-sm leading-none text-neutral-400 max-md:ml-2.5"
      >
        Email Address
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter Your Email"
        className="self-stretch p-5 text-base font-medium leading-none rounded-md border border-solid border-neutral-400 text-neutral-400 max-md:pr-5 max-md:max-w-full"
      />

      <label
        htmlFor="phone"
        className="z-10 mt-5 ml-5 text-sm leading-none text-neutral-400 max-md:ml-2.5"
      >
        Mobile Number
      </label>
      <input
        id="phone"
        type="tel"
        defaultValue="+00 5659 0849696"
        className="self-stretch p-5 text-base font-medium leading-none rounded-md border border-solid border-neutral-400 text-neutral-700 max-md:pr-5 max-md:max-w-full"
      />

      <label
        htmlFor="query"
        className="z-10 mt-5 ml-5 text-sm leading-none text-neutral-400 max-md:ml-2.5"
      >
        Your Query
      </label>
      <textarea
        id="query"
        placeholder="Type here..."
        className="self-stretch px-5 pt-5 pb-16 text-base font-medium leading-none rounded-md border border-solid border-neutral-400 text-neutral-400 max-md:pr-5 max-md:max-w-full"
      />

      <button
        type="submit"
        className="self-stretch px-16 pt-4 pb-7 mt-12 text-lg text-white bg-teal-800 rounded-[282px] shadow-[0px_6px_17px_rgba(36,93,81,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      >
        Join Now
      </button>
    </form>
  );
}
