import React from "react";
import Bg from "@/assets/images/team/bg.png";
import Coo from "@/assets/images/team/coo.png";
import Cmo from "@/assets/images/team/cmo.png";
import Pl1 from "@/assets/images/team/pl.png";
import Pl2 from "@/assets/images/team/pl2.png";
import SubPm from "@/assets/images/team/sub-pm.png";
import Leader2D from "@/assets/images/team/2d-leader.png";
import Leader3D from "@/assets/images/team/3d-leader.png";
import Unity from "@/assets/images/team/unity-leader.png";
import Server from "@/assets/images/team/server-leader.png";
import Vfx from "@/assets/images/team/vfx-leader.png";
import Blc from "@/assets/images/team/blc-leader.png";
import BE from "@/assets/images/team/BE-leader.png";
import GD from "@/assets/images/team/GD-leader.png";
import Cinematic from "@/assets/images/team/cinematic-leader.png";
import Mkt from "@/assets/images/team/mkt-leader.png"; 
import Creative from "@/assets/images/team/creative-leader.png";
import Vr from "@/assets/images/team/vr-leader.png";
import BgMember from "@/assets/images/team/bg-member.png";
import TopBg from "@/assets/images/team/top-bg.png";
import BottomBg from "@/assets/images/team/bottom-bg.png";

function Team() {
  const Fade = require('react-reveal/Fade');
  
  return (
    <div className="text-left text-[#828282] relative z-10">
      <img src={TopBg} className="h-[536px]" />
      <div className="px-[120px] pb-[105px] pt-[100px] mt-[-405px] bg-smoke" 
        style={{background: `url(${Bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="flex items-start mb-[20px]">
          <Fade top>
            <span className="text-[94px] mr-4" style={{color: 'rgba(142, 142, 142, 0.35)', lineHeight: '55px'}}>02</span>
            <div className="pt-[10px]">
              <p className="text-[44px] font-bold italic text-white border-top-title">OUR TEAM</p>
              <p className="max-w-[1060px] text-[25px] font-light" style={{lineHeight: '30px'}}> You can&apos;t make great products and services without great people. Mirai studio is committed to hiring, developing, and retaining world class talent. Working in ONE team to push the boundaries of what games can do for players, developers and publishers. We are seek unconventional solutions to unconventional problems.</p>
            </div>
          </Fade>
        </div>
        <div>          
          <Fade top>
            <p className="text-center text-[40px] italic mb-[13px] font-medium">Founder</p>
            <div className="text-center mx-[-95px]">
              <div className="inline-block text-center founder px-[75px] mb-[60px]">
                <div className="ava">
                  <img src={Coo} alt="" />
                </div>
                <p className="title">COO</p>
                <p className="name">Quang Mai</p>
              </div>
              <div className="inline-block text-center founder px-[75px] mb-[60px]">
                <div className="ava">
                  <img src={Cmo} alt="" />
                </div>
                <p className="title">CMO</p>
                <p className="name">Ron Nguyen</p>
              </div>
              <div className="inline-block text-center founder px-[75px] mb-[60px]">
                <div className="ava">
                  <img src={Pl1} alt="" />
                </div>
                <p className="title">PL</p>
                <p className="name">Nam vu</p>
              </div>
              <div className="inline-block text-center founder px-[75px] mb-[60px]">
                <div className="ava">
                  <img src={Pl2} alt="" />
                </div>
                <p className="title">PL</p>
                <p className="name">Dai Tran</p>
              </div>
            </div>
          </Fade>
        </div>
        <div>
          <p className="text-center text-[40px] italic mb-[13px] font-medium">Team member</p>
          <div className="text-center mb-[26px] mx-[-60px]">
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava">
                  <img src={SubPm} alt="" />
                </div>
                <p className="title">Sub-PM</p>
                <p className="name">Khanh Nguyen</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava">
                  <img src={Leader2D} alt="" />
                </div>
                <p className="title">2D Leader</p>
                <p className="name">Trang Nguyen</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava">
                  <img src={Leader3D} alt="" />
                </div>
                <p className="title">3D Leader</p>
                <p className="name">Tuan Do</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava">
                  <img src={Unity} alt="" />
                </div>
                <p className="title">Unity Leader</p>
                <p className="name">Tu Hoang</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava" style={{background: `url(${BgMember})`}}>
                  <img src={Server} alt="" />
                </div>
                <p className="title">Server Leader</p>
                <p className="name">Bich Le</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava">
                  <img src={Vfx} alt="" />
                </div>
                <p className="title px-3">Vfx/ Sfx leader</p>
                <p className="name">Thao Khuc</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava">
                  <img src={Blc} alt="" />
                </div>
                <p className="title">BlockChain leader</p>
                <p className="name">Thanh Nguyen</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava">
                  <img src={BE} alt="" />
                </div>
                <p className="title">FE/BE Leader</p>
                <p className="name">Hung Nguyen</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava">
                  <img src={GD} alt="" />
                </div>
                <p className="title">GD Leader</p>
                <p className="name">Le Nguyen</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava">
                  <img src={Cinematic} alt="" />
                </div>
                <p className="title">Cinematic Leader</p>
                <p className="name">Tuan Anh Dao</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava">
                  <img src={Mkt} alt="" />
                </div>
                <p className="title">Marketing Leader</p>
                <p className="name">Trang Nguyen</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava">
                  <img src={Creative} alt="" />
                </div>
                <p className="title">Creative Leader</p>
                <p className="name">Phuc Trong</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava">
                  <img src={Vr} alt="" />
                </div>
                <p className="title">VR Leader</p>
                <p className="name">Hai Dinh</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="inline-block text-center member mx-[45px]">
                <div className="ava">
                  <img src={Blc} alt="" />
                </div>
                <p className="title">UI/UX Leader</p>
                <p className="name">Tuyen Nguyen</p>
              </div>
            </Fade>          
          </div>
          <p className="text-center text-[40px] italic font-medium">and 40+ team members</p>
        </div>
      </div>
      <img src={BottomBg} className="h-[135px] mt-[-110px] relative" />
    </div>    
  );
}

export default Team;