import { Button } from "@material-tailwind/react";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className=" flex flex-wrap px-6 py-4 gap-5 justify-between w-full">
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
        {/* <div className="self-stretch my-auto font-medium text-teal-800">
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
        /> */}
        <Button
          className="self-stretch  text-white text-center whitespace-nowrap bg-teal-800 rounded-[257px] max-md:px-5"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </nav>
    </header>
  );
}
