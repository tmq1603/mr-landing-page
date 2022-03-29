import React from "react";
import Service from "@/components/service";
import Team from "@/components/team";

function Home() {
  // const Zoom = require('react-reveal/Zoom');
  return (
    <div>
      {/* <Zoom>
        <div>Welcome To Home Page</div>
      </Zoom> */}
      <Team/>
      <Service/>
    </div>
  );
}

export default Home;