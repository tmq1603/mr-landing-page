import React from "react";
import MechLogo from "@/assets/images/products/mech-logo.png";
import MechBtn from "@/assets/images/products/mech-btn.png";
import TestnetMechBtn from "@/assets/images/products/testnet-mech-btn.png";
import ArrowIcon from "@/assets/images/products/arrow-icon.png";
import SectionFooter from "@/assets/images/products/section-footer.png";

function Products() {
  const Fade = require('react-reveal/Fade');
  const Reveal = require("react-reveal/Reveal");
  return (
    <Fade bottom>
      <div className="products h-[1166px] pl-[120px] mt-[-380px] relative">
        <Fade left>
          <div className="absolute top-[185px]">
            <span className="text-[94px] mr-4 text-[#979797] font-glitch">05</span>
            <span className="text-[44px] font-bold italic text-[#464646] border-top-title border-top-title-left">PRODUCTS</span>
          </div>
        </Fade>
        <Fade bottom>
          <div className="characters-bg"></div>
          <div className="red-rectangle"></div>
        </Fade>
        <Reveal effect="zoomIn"><div className="hero"></div></Reveal>
        <Fade bottom>
          <div className="absolute top-[445px]">
            <img className="inline-block" src={MechLogo} alt="" />
            <span className="ml-[20px] align-top text-[55px] font-bold italic text-[#4F4F4F]">Mech metaverse</span>
            <p className="w-[645px] font-light text-[23px] leading-[27px] text-[#232323]">
              The strategic turn-based action featuring all cool Mecha and pilots from all around the world. 
              Enjoy the tactics, fire and explosion with all the benefits from blockchain and NFT.
            </p>
          </div>
        </Fade>
        <Fade top>
          <div className="products-btn-container">
            <button className="products-btn mech-btn top-[100px]">
              <img src={MechBtn} alt="" />
              <div className="btn-content">
                <span className="font-medium text-[28px] leading-[0rem] mr-[10px]">mechmaster.io</span>
                <img className="inline align-baseline" src={ArrowIcon} alt="" />
                <span className="block text-[22px] italic font-normal text-[#828282]">Mech gaming ecosystem</span>
              </div>
            </button>
            <button className="products-btn testnet-mech-btn top-[180px] left-[-20px]">
              <img src={TestnetMechBtn} alt="" />
              <div className="btn-content">
                <span className="font-medium text-[28px] leading-[0rem] mr-[10px]">app.mechmaster.io</span>
                <img className="inline align-baseline" src={ArrowIcon} alt="" />
                <span className="block text-[23px] italic font-normal text-[#828282]">Testnet Launching event</span>
              </div>
            </button>
          </div>
        </Fade>
        <Fade right>
          <div className="absolute bottom-[100px]">
            <img src={SectionFooter} alt="" />
          </div>
        </Fade>
      </div>
    </Fade>
  );
}

export default Products;