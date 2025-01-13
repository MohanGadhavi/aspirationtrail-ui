import * as React from "react";

export default function Header() {
  return (
    <header className="bg-red-400 flex flex-wrap gap-5 justify-between w-full max-w-[1620px] max-md:max-w-full">
      <div className="flex gap-2 my-auto text-2xl font-bold text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/19a66772a0ecd554270eff2d72060d6fb0e7057b3662e77295e37113fe45511f?placeholderIfAbsent=true&apiKey=e6d253afa5f042568e5e89e014ee427d"
          alt="Company logo"
          className="object-contain shrink-0 aspect-[1.42] w-[57px]"
        />
        <h1 className="my-auto basis-auto">AspirationTrail</h1>
      </div>
      <nav className="flex gap-10 items-center text-lg">
        <div className="self-stretch my-auto font-medium text-teal-800">
          Home
        </div>
        <div className="self-stretch my-auto text-black basis-auto">
          How It Works?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8847a1f3e04d5c4ff9d6dc11c952f062bc1b5aaa43f6b83b32420899a19f411?placeholderIfAbsent=true&apiKey=e6d253afa5f042568e5e89e014ee427d"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
        />
        <button className="self-stretch px-12 pt-3 pb-5 text-white whitespace-nowrap bg-teal-800 rounded-[257px] max-md:px-5">
          Login
        </button>
      </nav>
    </header>
  );
}
