import React from "react";
import PersonIcon from "@/assets/images/get-in-touch/person-icon.png";
import PhoneIcon from "@/assets/images/get-in-touch/phone-icon.png";
import MailIcon from "@/assets/images/get-in-touch/mail-icon.png";
import PositionIcon from "@/assets/images/get-in-touch/position-icon.png";

function GetInTouch() {
  const Fade = require('react-reveal/Fade');

  return (
    <Fade bottom>
      <div className="get-in-touch h-[900px] w-full px-[120px] pt-[100px] relative top-[-645px]">
        <div>
          <span className="text-[94px] mr-4 text-[#8e8e8e59] font-glitch">06</span>
          <span className="text-[44px] font-bold italic text-[#D9D9D9] border-top-title border-top-title-left">GET IN TOUCH</span>
        </div>
        <p className="w-[750px] font-light text-[23px] leading-[30px] text-[#E7E7E7] contact-text">
          If you have a question or general enquiry, we’re here to help. Please contact us via the following info
        </p>
        <div className="font-light text-[23px] leading-[30px] text-[#FFFFFF]">
          <p className="mt-[20px] mb-[40px]"><img className="inline-block mr-[62px]" src={PersonIcon} alt="" />Mirai Studio PTE. LTD.</p>
          <p className="mb-[40px]"><img className="inline-block mr-[62px]" src={PhoneIcon} alt="" />012345678</p>
          <p className="mb-[40px]"><img className="inline-block mr-[62px]" src={MailIcon} alt="" />contact@miraistudio.games</p>
          <p><img className="inline-block mr-[62px]" src={PositionIcon} alt="" />68 Circular road #02-01 Singapore</p>
        </div>
      </div>
    </Fade>
  );
}

export default GetInTouch;