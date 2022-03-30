import { Header } from "@/components/common/Header";
import { Slider } from "@/components/slider";
import React, { useEffect, useState } from "react";
import Service from "@/components/service";
import Master from "@/components/master";
import Team from "@/components/team";
import Products from "@/components/products"
import Desports from "@/components/desports";
import GetInTouch from "@/components/get-in-touch";
import Footer from "@/components/footer"
import MainBg from "@/assets/images/loading/main-bg.png";
import MiraiLogo from "@/assets/images/loading/mirai-logo.png";

function Home() {
  // const Reveal = require('react-reveal/Reveal');
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })

  return (
    <div>
      {isLoading && <div className="w-[100vw] h-[100vh] bg-black flex items-center justify-center loading" 
        style={{background: `url(${MainBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <img src={MiraiLogo} alt="" className="fadeOut"/>
      </div>}
      {!isLoading && <div className="relative">
        <Header />
        <Slider />
        <Master />
        <Team/>
        <Service/>
        <Products/>
        <Desports/>
        <GetInTouch/>
        <Footer/>
      </div>}
    </div>
  );
}

export default Home;