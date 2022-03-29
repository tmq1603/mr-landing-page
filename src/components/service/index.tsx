import React from "react";
import Robot1 from "@/assets/images/service/robot-1.png";
import Robot2 from "@/assets/images/service/robot-2.png";
import Robot3 from "@/assets/images/service/robot-3.png";
import Robot4 from "@/assets/images/service/robot-4.png";
import MiraiSun from "@/assets/images/service/mirai-sun.png";
import Ar from "@/assets/images/service/ar.png";
import Vr from "@/assets/images/service/vr.png";
import Unity from "@/assets/images/service/unity.png";
import Webgl from "@/assets/images/service/webgl.png";
import Pc from "@/assets/images/service/pc.png";
import Mobile from "@/assets/images/service/mobile.png";
import MainBg from "@/assets/images/service/main-bg.png";
import TopBg from "@/assets/images/service/top-bg.png";

function Service() {
  const Fade = require('react-reveal/Fade');
  
  return (
    <div className="px-[120px] text-left pt-[40px] overflow-hidden relative mt-[-26px] service" 
      style={{background: `url(${MainBg})`}}>
      <img src={TopBg} className="absolute left-0 right-0 top-[-26px] z-10 h-[135px]" />
      <div>
        <div>
          <div className="flex">
            <div className="pt-[45px]">
              <Fade left>
                <div className="flex items-center mb-[129px]">
                  <span className="text-[94px] mr-4" style={{color: 'rgba(142, 142, 142, 0.35)'}}>03</span>
                  <span className="text-[44px] font-bold italic text-[#464646] border-top-title">SERVICES</span>
                </div>
                <div className="ml-[92px]">
                  <p className="flex items-center text-[25px] text-[#828282] font-semibold mb-[33px]"><img src={MiraiSun} alt="" className="mr-3"/>PROGRAMMING</p>
                  <p className="flex items-center text-[25px] text-[#828282] font-semibold mb-[33px]"><img src={MiraiSun} alt="" className="mr-3"/>DESIGN</p>
                  <p className="flex items-center text-[25px] text-[#828282] font-semibold"><img src={MiraiSun} alt="" className="mr-3"/>ART & AUDIO</p>
                </div>
              </Fade>
            </div>
            <div className="flex items-start ml-[-70px]">
              <Fade top>
                <img src={Robot1} alt="" className="mr-4"/>
              </Fade>
              <Fade bottom>
                <img src={Robot2} alt="" className="mr-4" />      
              </Fade>        
              <Fade top>
                <img src={Robot3} alt="" className="mr-4"/>
              </Fade>    
              <Fade bottom>
                <img src={Robot4} alt="" /> 
              </Fade>   
            </div>
          </div>
          <p className="text-[23px] text-[#828282] font-light w-[600px] ml-[92px] mt-[-475px]">            
            <Fade bottom>
              We are experienced in building game on block-chain with experts on AR and VR technologies.
            </Fade>
          </p>
        </div>
        <div className="pt-[120px] absolute left-[1134px] top-[40px] right-side">
          <Fade right>
            <p className="text-[24px] font-light text-[#5c5c5c] border-bottom-title-left ml-[-95px] mb-[53px] uppercase text-top">
              We’re hungry for making good games
            </p>
            <p className="text-[23px] text-[#828282] font-light w-[645px] mb-[120px] text-middle">
              Our team is able to create a complete video game from concept to launch as well as take part in co-productions.
            </p>
            <div className="ml-[200px] bottom">
              <p className="flex items-center text-[25px] text-[#828282] font-semibold mb-[33px]"><img src={MiraiSun} alt="" className="mr-3"/>BLOCKCHAIN</p>
              <p className="flex items-center text-[25px] text-[#828282] font-semibold mb-[33px]"><img src={MiraiSun} alt="" className="mr-3"/>QA</p>
            </div>
          </Fade>
        </div>
      </div>
      <div className="flex justify-between mt-[180px]">
        <div>
          <Fade top>
            <p className="text-[33px] text-[#828282] border-bottom-title-left mb-[50px]">
              TECHNOLOGIES
            </p>
          </Fade>
          <div className="ml-[92px]">
            <Fade left>
              <p className="flex items-center text-[25px] text-[#828282] font-semibold mb-[17px]"><img src={Unity} alt="" className="mr-9"/>UNITY3D</p>
              <p className="flex items-center text-[25px] text-[#828282] font-semibold mb-[17px]"><img src={Ar} alt="" className="mr-9"/>AR</p>
              <p className="flex items-center text-[25px] text-[#828282] font-semibold mb-[17px]"><img src={Vr} alt="" className="mr-9"/>VR</p>
            </Fade>
          </div>
        </div>
        <div>
          <Fade top>
            <p className="text-[33px] text-[#828282]  mb-[50px] text-right">
              <span className="border-bottom-title-right">PLATFORMS</span>
            </p>
          </Fade>
          <div className="mr-[92px]">
            <Fade right>
              <p className="flex items-center text-[25px] text-[#828282] font-semibold mb-[17px]"><img src={Pc} alt="" className="pr-7"/>PC</p>
              <p className="flex items-center text-[25px] text-[#828282] font-semibold mb-[17px] pl-2"><img src={Mobile} alt="" className="pr-8"/>MOBILE</p>
              <p className="flex items-center text-[25px] text-[#828282] font-semibold mb-[17px] pl-2"><img src={Webgl} alt=""/></p>
            </Fade>
          </div>
        </div>
      </div>
    </div>    
  );
}

export default Service;