import React from "react";
import Bg from "@/assets/images/master/bg.png";

import Scroll from "@/assets/images/banner/icon-scroll.png"

function Master(
  {
    scrollTo
  }: {
    scrollTo: (id:string) => void;
  }) {
  const Fade = require('react-reveal/Fade');
  
  return (
    <div className="text-left text-[#828282] relative z-10">
      <Fade bottom>
        <div className="px-[120px] pb-[105px] pt-[181px] h-[786px] bg-pilot -mt-[200px]" 
          style={{background: `url(${Bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="flex items-start mb-[20px]">
            <Fade left>
              <span className="text-[94px] mr-8 font-glitch" style={{color: 'rgba(142, 142, 142, 0.35)', lineHeight: '85px'}}>01</span>
            </Fade>
            <div className="pt-[10px]">
              <Fade left>
                <p className="text-[44px] font-medium italic text-[#B3B3B3] border-top-title">
                Masters In <span className="text-[#FF0000]">Reality</span> 
                  <br />
                And <span className="text-[#FF0000]">Imagination</span>
                </p>
              </Fade>
              <p className="max-w-[1387px] text-[25px] font-light" style={{lineHeight: '30px'}}> 
                Mirai studio is a subsidiary of Icetea Labs.
                <br />
                Established on 8/6/2021, we are a team of veteran game and platform developers with great passion to bring an evolution to the current gaming era. And we belief that we are building a solid foundation for the future gaming industry.
              </p>
            </div>
          </div>
        </div>
      </Fade>
      
      <img src={Scroll} alt=""  className="absolute left-1/2 -top-11 z-10 -translate-x-1/2 cursor-pointer" onClick={() => scrollTo('master')}/>
    </div>    
  );
}

export default Master;