import * as React from 'react';
import Header from './Header';
import StatCard from './StatCard';
import HowItWorksCard from './HowItWorksCard';
import ContactForm from './ContactForm';
import Footer from './Footer';
import { Button } from '@material-tailwind/react';
import { gsap } from 'gsap';

const stats = [
  { number: '15K+', label: 'Number of students' },
  { number: '75%', label: 'Percentage of success', highlighted: true },
  { number: '35', label: 'Numbers of questions' },
  { number: '25+', label: 'Number of experts', highlighted: true },
  { number: '15+', label: 'Years of experience' },
];

const howItWorksSteps = [
  {
    title: 'Sign Up',
    description:
      'Montes vivamus curae quisque et primis pretium nullam. Congue dis convallis eget ipsum cubilia ante.',
  },
  {
    title: 'Get access',
    description: 'Access to question bank of over 2000 questions',
  },
  {
    title: 'Practice questions',
    description:
      'Prepare for the MLA exam in multiple modes of revision and track your progress with your personalised dashboard',
  },
  {
    title: 'Get Result',
    description:
      "compare your results with your peers' with advanced analytics",
  },
];

export default function LandingPage() {
  return (
    <div
      className="flex overflow-hidden flex-col items-center bg-white p-3"
      id="main"
    >
      <div
        className="mt-20 w-full max-w-[1555px] max-md:mt-10 max-md:max-w-full"
        id="HomePage"
      >
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-lg max-md:mt-10 max-md:max-w-full">
              <h1 className="text-6xl font-semibold text-black leading-[62px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Take student
                <br />
                experience to the next level
              </h1>
              <p className="mt-5 leading-7 text-zinc-600 max-md:mr-2.5 max-md:max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <Button
                id="joinButton"
                className="self-start px-14 py-5 mt-24 font-medium text-white bg-teal-800 rounded-[257px] shadow-[0px_6px_17px_rgba(36,93,81,0.25)] max-md:px-5 max-md:mt-10"
              >
                Join Now
              </Button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eced358cfd65b26e4563044f5dfdebc3be6d2ccd8a62cabd8756144c79b8d67f?placeholderIfAbsent=true&apiKey=e6d253afa5f042568e5e89e014ee427d"
                alt=""
                className="object-contain self-end mt-32 mr-14 max-w-full aspect-[2.3] w-[106px] max-md:mt-10 max-md:mr-2.5"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 max-w-full border-teal-800 border-solid border-[3px] h-[641px] rounded-[192px] w-[331px] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-14 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f614c5c0b1005f7ff812c91f94036f2eae630e6855f55a04a40c4cf7cd2f5418?placeholderIfAbsent=true&apiKey=e6d253afa5f042568e5e89e014ee427d"
                alt=""
                className="object-contain ml-6 max-w-full aspect-[1.17] w-[116px] max-md:ml-2.5"
              />
              <div className="flex flex-col items-start px-4 pt-2 mt-7 border-teal-800 border-solid border-[3px] rounded-[192px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0002e02e4641fc01ae50106d5e1acf77f20c68a8f33cdc7933dfd6b9e641f92f?placeholderIfAbsent=true&apiKey=e6d253afa5f042568e5e89e014ee427d"
                  alt=""
                  className="object-contain z-10 mb-0 w-full aspect-[0.5] rounded-[192px] max-md:-mr-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-28 text-4xl font-semibold leading-none text-black max-md:mt-10">
        Our Success
      </h2>

      <div className="flex flex-wrap gap-5 justify-between items-center px-20 py-1 mt-12 w-full font-medium rounded-xl bg-zinc-100 max-w-[1607px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      {/* 
      <div className="flex flex-col justify-center items-center self-stretch px-20 py-12 mt-24 w-full bg-teal-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-w-[1581px] max-md:max-w-full">
          <h2 className="ml-5 text-4xl font-semibold leading-none text-white">
            How It Works
          </h2>
          <div className="flex flex-wrap gap-5 mt-12 w-full max-md:mt-10">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex-1 min-w-[250px]">
                <HowItWorksCard {...step} />
              </div>
            ))}
          </div>
          <Button className="px-12 py-4 mt-12 ml-5 max-w-full text-lg font-medium text-white border-2 border-white border-solid rounded-[257px] shadow-[0px_6px_17px_rgba(84,90,232,0.25)] w-[183px] max-md:px-5 max-md:mt-10">
            Start Now
          </Button>
        </div>
      </div> */}

      <div className="mt-24 ml-2.5 w-full max-w-[1327px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad08f9979f8ab5cdd9732c4108aab727a9030b01644d124b22f3a268cf8ff90?placeholderIfAbsent=true&apiKey=e6d253afa5f042568e5e89e014ee427d"
              alt="Support illustration"
              className="object-contain grow w-full aspect-[0.65] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
