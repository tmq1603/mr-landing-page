import { Header } from "@/components/common/Header";
import { Slider } from "@/components/slider";
import React from "react";

function Home() {
  const Zoom = require('react-reveal/Zoom');
  return (
    <div className="relative">
      <Header />
      <Slider />
      <Zoom>
        <div className="aaaa">Welcome To Home Page</div>
      </Zoom>
    </div>
  );
}

export default Home;