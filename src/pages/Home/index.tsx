import { Header } from "@/components/common/Header";
import { Slider } from "@/components/slider";
import React from "react";
import Service from "@/components/service";
import Team from "@/components/team";
import Partner from "@/components/partners"
import Products from "@/components/products"
import Desports from "@/components/desports";
import GetInTouch from "@/components/get-in-touch";
import Footer from "@/components/footer"

function Home() {
  // const Zoom = require('react-reveal/Zoom');
  return (
    <div className="relative">
      <Header />
      <Slider />
      <Team/>
      <Service/>
      <Partner/>
      <Products/>
      <Desports/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}

export default Home;