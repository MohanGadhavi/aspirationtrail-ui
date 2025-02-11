import * as React from 'react';

export default function Footer() {
  return (
    <div className="flex flex-col  self-stretch pt-14 p-5 mt-24 w-full bg-teal-800 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start self-center w-full max-w-[1621px] max-md:max-w-full">
        <div className="flex flex-col items-start self-stretch">
          <div className="flex gap-2 text-2xl font-bold text-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/782497081c43d87ff55d0b82c6a7b9b5da7804c1f479e1661fa369f18881cdd2?placeholderIfAbsent=true&apiKey=e6d253afa5f042568e5e89e014ee427d"
              alt="Company logo"
              className="object-contain shrink-0 aspect-[1.42] w-[57px]"
            />
            <div className="my-auto basis-auto">Logo Here</div>
          </div>
          <div className="self-stretch mt-5 text-lg leading-8 text-zinc-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68124d8f46f81dbe22ec75690398964c3b075511bcd90afe3734fea2fe8ee83?placeholderIfAbsent=true&apiKey=e6d253afa5f042568e5e89e014ee427d"
            alt=""
            className="object-contain mt-12 max-w-full aspect-[6.76] w-[203px] max-md:mt-10"
          />
        </div>
        <div className="grid grid-cols-3 justify-between">
          <nav className="flex flex-col items-start mt-1.5 text-base text-zinc-300">
            <h3 className="text-xl font-medium text-white">My Account</h3>
            <a href="#" className="mt-5 leading-loose">
              Sign In
            </a>
            <a href="#" className="mt-1.5 leading-loose">
              Dashboard
            </a>
            <a
              href="#"
              className="self-stretch mt-1.5 leading-loose max-md:mr-1"
            >
              Monitor Progress
            </a>
            <a href="#" className="self-stretch mt-1.5 leading-loose">
              Compare Success
            </a>
            <a href="#" className="mt-1.5 leading-loose">
              My Topics
            </a>
          </nav>

          {/* <nav className="flex flex-col items-start mt-1.5 text-base text-zinc-300">
          <h3 className="text-xl font-medium text-white">About SBA</h3>
          <a href="#" className="self-stretch mt-5 leading-loose">
            Company Information
          </a>
          <a href="#" className="mt-1.5 leading-loose">
            Resources
          </a>
          <a href="#" className="mt-1.5 leading-loose">
            Our Success
          </a>
          <a href="#" className="mt-1.5 leading-loose">
            Meet The Experts
          </a>
        </nav> */}

          <nav className="flex flex-col mt-1.5">
            <h3 className="text-xl font-medium text-white max-md:mr-1.5">
              Support
            </h3>
            <a href="#" className="mt-5 text-base leading-loose text-zinc-300">
              Contact Us
            </a>
          </nav>

          <div className="flex flex-col items-start mt-1.5 text-base">
            <h3 className="text-xl font-medium text-white">Newsletter</h3>
            <p className="mt-1 leading-7 text-zinc-300 w-[254px]">
              Join Our Mailing List To Stay Up To Date With World
            </p>
            <form className="flex gap-5 justify-between self-stretch py-1 pr-1.5 pl-5 mt-9 bg-white rounded-[75px]">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="newsletter-email"
                placeholder="Email address"
                className="self-start leading-loose text-neutral-400 bg-transparent border-none"
              />
              <button
                type="submit"
                className="px-8 pt-3 pb-5 text-white whitespace-nowrap bg-teal-800 rounded-[282px] shadow-[0px_6px_17px_rgba(36,93,81,0.25)] max-md:px-5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-16 py-3 mt-12 w-full text-base leading-loose text-white  max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1621px] max-md:max-w-full">
          <div>© 2022 Single Best Answer | All Rights Researved</div>
          <div className="text-right">
            Created with love by thecreation.design
          </div>
        </div>
      </div>
    </div>
  );
}
