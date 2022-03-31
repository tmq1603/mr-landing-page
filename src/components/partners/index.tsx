import React from "react";
import RedKiteLogo from "@/assets/images/partners/redkite-logo.png";
import GameFILogo from "@/assets/images/partners/gamefi-logo.png";
import MorningStarLogo from "@/assets/images/partners/morningstar-logo.png";
import YoubiCapitalLogo from "@/assets/images/partners/youbicapital-logo.png";
import DaomakerLogo from "@/assets/images/partners/daomaker-logo.png";
import BrosMediaLogo from "@/assets/images/partners/500brosmedia-logo.png";


/* eslint-disable react/jsx-key */
const makeCarousel = require("react-reveal/makeCarousel");
const Slide = require("react-reveal/Slide");

const CarouselUI = ({ position, total, handleClick, children }: any) => (
  <div className="video-player-container w-[370px] h-[210px] border-2 border-rose-600 rounded">
    <div className="relative w-[370px] h-[210px] overflow-hidden">{children}</div>
    <div className="text-center w-[370px] z-[100]">
      {Array(...Array(total)).map( (val, index) =>
        <span className={`carousel-dot simple ${index === position ? 'active': ''}`} key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ ' }
        </span>
      )}
    </div>
  </div>
);
const Carousel = makeCarousel(CarouselUI);

function Partners() {
  const Fade = require('react-reveal/Fade');

  return (
    <Fade bottom>
      <div className="partners w-full h-[1349px] relative top-[-40px]">
        <Fade left>
          <div className="partners-container h-full">
            <div className="video-player">
              <Carousel defaultWait={0}>
                <Slide right>
                  <div>
                    <iframe 
                      width="365"
                      height="205"
                      src="https://www.youtube.com/embed/-RmBjaha67E"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </div>
                </Slide>
                <Slide right>
                  <div>
                    <iframe 
                      width="365"
                      height="205"
                      src="https://www.youtube.com/embed/edfM3Qv2RMM"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </div>
                </Slide>
                <Slide right>
                  <div>
                    <iframe 
                      width="365"
                      height="205"
                      src="https://www.youtube.com/embed/uZtxoDBX8Kg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </div>
                </Slide>
              </Carousel>
            </div>
            <div className="video-player">
              <Carousel defaultWait={0}>
                <Slide right>
                  <div>
                    <iframe 
                      width="365"
                      height="205"
                      src="https://www.youtube.com/embed/edfM3Qv2RMM"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </div>
                </Slide>
                <Slide right>
                  <div>
                    <iframe 
                      width="365"
                      height="205"
                      src="https://www.youtube.com/embed/-RmBjaha67E"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </div>
                </Slide>
                <Slide right>
                  <div>
                    <iframe 
                      width="365"
                      height="205"
                      src="https://www.youtube.com/embed/uZtxoDBX8Kg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </div>
                </Slide>
              </Carousel>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className="absolute top-[300px] left-[120px]">
            <span className="text-[94px] mr-4 text-[#8E8E8E] opacity-[.35] font-glitch">04</span>
            <span className="text-[44px] font-bold italic text-[#D9D9D9] border-top-title border-top-title-left">PARTNERS</span>
          </div>
        </Fade>

        <div className="absolute top-[550px] left-[120px] px-[200px]">
          <div className="partners-logo-container">
            <div className="logo-item"><img src={RedKiteLogo} alt="" /></div>
            <div className="logo-item"><img src={GameFILogo} alt="" /></div>
            <div className="logo-item"><img src={MorningStarLogo} alt="" /></div>
            <div className="logo-item"><img src={YoubiCapitalLogo} alt="" /></div>
            <div className="logo-item"><img src={DaomakerLogo} alt="" /></div>
            <div className="logo-item"><img src={BrosMediaLogo} alt="" /></div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Partners;