import { Button, Card, Typography } from '@material-tailwind/react';
import React from 'react';
import api from '../../utils/api';
import Header from '../../components/Header/index.jsx';
import { useDispatch } from 'react-redux';

function Home() {
  const [metaData, setMetaData] = React.useState({
    stringFileds: [
      {
        course: {
          name: "LeetCode's Interview Crash Course",
          title: 'Data Structures and Algorithms',
          mentor:{
            id:0,
            name:"akshay"
          },
          details: {
            chapters: 13,
            items: 149,
            completion: '0%',
          },
        },
      },
    ],
    col: 1,
    seq: 1,
    id: 0,
  });
  return (
    <>
      <Header />
      <div className=" h-screen bg-gray-100 px-4  pt-5">
        <div className="w-72   bg-gray-600  rounded-xl">
          {metaData.stringFileds.map((item, index) => {
            return (
              <div className="h-60 ">
                <div className="h-[65%] pt-2 flex flex-col gap-2 bg-red-500 rounded-t-xl px-5">
                  <Typography variant="small">{item.course.name}</Typography>
                  <Typography variant="h4" className="w-52 ">
                    {item.course.title}
                  </Typography>
                </div>
                <div className="h-[35%] px-5 flex items-center ">
                  <div className="flex justify-between w-[50%]">
                    <div className="text-center">
                      <Typography variant="small">chapters</Typography>
                      <Typography variant="small" className="mt-0.5">
                        {item.course.details.chapters}
                      </Typography>
                    </div>
                    <div className="text-center">
                      <Typography variant="small">items</Typography>
                      <Typography variant="small" className="mt-0.5">
                        {item.course.details.items}
                      </Typography>
                    </div>
                  </div>
                  <div className="w-[50%]"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="h-screen bg-gray-600 px-4 pt-5 ">
        <div className=" w-fit h-52 bg-red-400  ">
          <div className="w-72 ">hi</div>
          <div className="bg-blue-gray-500 h-[45%]">hi</div>
          
        </div>
      </div> */}
    </>
  );
}

export default Home;
