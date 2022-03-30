import React from "react";
import DesportsBtn from "@/assets/images/desport/desports-btn.png";
import ArrowIcon from "@/assets/images/desport/arrow-icon.png";

function Desports() {
  return (
    <div className="desports h-[913px] pt-[495px] pl-[120px]">
      <p className="w-[550px] font-light text-[23px] leading-[30px] text-[#E7E7E7]">
        A new home for E-sport fan and competitors. With built-in blockchain and NFT, we introduce you a whole new Esport experience.
      </p>
      <button className="desports-btn">
        <img src={DesportsBtn} alt="" />
        <div className="btn-content">
          <span className="font-medium text-[28px] leading-[0rem] mr-[10px]">about.desports.gg</span>
          <img className="inline align-baseline" src={ArrowIcon} alt="" />
        </div>
      </button>
    </div>
  );
}

export default Desports;