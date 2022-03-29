import { Header } from "@/components/common/Header";
import { Slider } from "@/components/slider";
import React from "react";
import Service from "@/components/service";
import Team from "@/components/team";

function Home() {
  // const Zoom = require('react-reveal/Zoom');
  return (
    <div className="relative">
      <Header />
      <Slider />
      <Team/>
      <Service/>
    </div>
  );
}

export default Home;