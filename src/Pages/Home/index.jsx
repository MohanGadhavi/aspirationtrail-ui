import React, { useState } from 'react';
import Header from '../../components/Header/index.jsx';
import conquer_js from '../../assets/course_imgs/conquer_js.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import player_icons from '../../assets/player_icons/index.js';

const LobbiesData = [
  {
    name: "LeetCode's Interview Crash Course",
    title: 'Conquer JavaScript',
    cover: {
      // img_url:
      //   'https://r4.wallpaperflare.com/wallpaper/1/398/339/elden-ring-landscape-game-art-video-game-art-video-games-hd-wallpaper-078f02646fe5bffa3f62747121a19735.jpg',
      img_url: conquer_js,
      alt: '30 Days of JavaScript',
    },
    mentor: {
      id: 0,
      name: 'akshay',
    },
    details: {
      chapters: 13,
      items: 149,
      completion: '0%',
    },
  },
  {
    name: "LeetCode's Interview Crash Course",
    title: 'Data Structures and Algorithms',
    cover: {
      img_url:
        'https://c4.wallpaperflare.com/wallpaper/384/350/430/digital-art-artwork-cyber-cyberpunk-neon-hd-wallpaper-preview.jpg',
      alt: 'Data Structures and Algorithms',
    },
    mentor: {
      id: 0,
      name: 'akshay',
    },
    details: {
      chapters: 13,
      items: 149,
      completion: '0%',
    },
  },
  {
    name: "LeetCode's Interview Crash Course",
    title: 'Data Structures and Algorithms',
    cover: {
      img_url:
        'https://c4.wallpaperflare.com/wallpaper/996/184/951/night-artwork-futuristic-city-cyberpunk-wallpaper-preview.jpg',
      alt: 'Data Structures and Algorithms',
    },

    mentor: {
      id: 0,
      name: 'akshay',
    },
    details: {
      chapters: 13,
      items: 149,
      completion: '0%',
    },
  },
  {
    name: "LeetCode's Interview Crash Course",
    title: 'Data Structures and Algorithms',
    cover: {
      img_url:
        'https://c4.wallpaperflare.com/wallpaper/790/727/718/face-mask-mask-military-armor-call-of-duty-hd-wallpaper-preview.jpg',
      alt: 'Data Structures and Algorithms',
    },

    mentor: {
      id: 0,
      name: 'akshay',
    },
    details: {
      chapters: 13,
      items: 149,
      completion: '0%',
    },
  },
  {
    name: "LeetCode's Interview Crash Course",
    title: 'Data Structures and Algorithms',
    cover: {
      img_url:
        'https://c4.wallpaperflare.com/wallpaper/760/1000/947/spiderman-ps4-spiderman-games-hd-wallpaper-preview.jpg',
      alt: 'Data Structures and Algorithms',
    },

    mentor: {
      id: 0,
      name: 'akshay',
    },
    details: {
      chapters: 13,
      items: 149,
      completion: '0%',
    },
  },
  {
    name: "LeetCode's Interview Crash Course",
    title: 'Data Structures and Algorithms',
    cover: {
      img_url:
        'https://r4.wallpaperflare.com/wallpaper/992/499/618/rainbow-six-patriots-fps-game-action-video-game-wallpaper-f291e2a0ed76fe9bda78c2e570c899d2.jpg',
      alt: 'Data Structures and Algorithms',
    },

    mentor: {
      id: 0,
      name: 'akshay',
    },
    details: {
      chapters: 13,
      items: 149,
      completion: '0%',
    },
  },
];

function Home() {
  const [metaData, setMetaData] = useState(LobbiesData);

  return (
    <div className="bg-teal-500 mesh-gradient-bg ">
      <Header />
      <div className=" min-h-screen px-4">
        <div className="py-4 flex justify-between gap-5 overflow-x-auto custom-scrollbar ">
          {metaData.map((item, i) => {
            return (
              <button
                className={`group relative min-w-[28em] max-w-[28em] min-h-60 max-h-[22rem] rounded-2xl overflow-hidden outline outline-1 outline-white/10 shadow-lg  `}
                style={{
                  background: `linear-gradient(45deg, hsla(${
                    (i + 1) * 30
                  }, 100%, 50%, 0.5), hsl(${
                    (i + 1) * 20 - 20
                  }, 100%, 50%, 0.5))`,
                }}
              >
                {/* bg-blured-img */}
                <img
                  className="absolute inset-0 object-cover w-full h-full z-[1] transform group-hover:rotate-0 group-hover:scale-125 transition-all duration-700"
                  src={item.cover.img_url}
                  alt={item.cover.alt}
                />

                {/* main-content */}
                <div className="relative z-10 h-full bg-white/10 backdrop-blur-2xl backdrop-contrast-125">
                  {/* cover-img-container */}
                  <div className="h-[50%] overflow-hidden  ">
                    <img
                      className="object-cover  h-full w-full object-top opacity-85  group-hover:scale-105 group-hover:opacity-100 group-hover:object-center  transition-all duration-700"
                      src={item.cover.img_url}
                      alt={item.cover.alt}
                    />
                  </div>

                  <div className=" h-[50%] p-4 flex flex-col gap-1 justify-between text-white text-left ">
                    <div>
                      <p className="text-3xl font-semibold drop-shadow-md ">
                        {item.title}
                      </p>
                    </div>
                    <div className="">
                      <button className=" py-1 px-2 -ml-2 rounded-full text-white/50 hover:bg-white/10 hover:text-white text-base flex gap-1 w-max ">
                        <div className="w-5 h-5 mt-[1px] flex items-center justify-center rounded-full ">
                          <FontAwesomeIcon
                            icon={faUserTie}
                            className=" text-sm"
                          />
                        </div>
                        Ankit Patel
                      </button>
                      <div className="w-full flex justify-between mt-2">
                        <div className="players_count flex gap-4 ">
                          <div className="flex">
                            {player_icons()
                              .sort(() => Math.random() - 0.5)
                              .map(
                                (player, i) =>
                                  i <= 2 && (
                                    <div
                                      className={`w-8 h-8 bg-[#55cbe3] border border-white rounded-full ${
                                        i !== 0 && '-ml-2'
                                      } `}
                                    >
                                      <img
                                        src={player.src}
                                        alt="player"
                                        className="w-full h-full"
                                      />
                                    </div>
                                  )
                              )}
                          </div>
                          <p className="text-base">865 players</p>
                        </div>
                        <button className="py-1 px-4 rounded-full bg-white/20 shadow-sm border border-white/30 hover:scale-[1.05] transition-all">
                          Open
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
