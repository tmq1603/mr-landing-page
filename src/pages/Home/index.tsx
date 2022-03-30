import { Header } from "@/components/common/Header";
import { Slider } from "@/components/slider";
import React from "react";
import Service from "@/components/service";
import Master from "@/components/master";
import Team from "@/components/team";
import Products from "@/components/products"
import Desports from "@/components/desports";
import GetInTouch from "@/components/get-in-touch";
import Footer from "@/components/footer"

function Home() {
  const scrollHandler = (id:string) => {
    console.log(id);
    const elementID = document.getElementById(id);
    if(elementID) {
      elementID.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
  return (
    <div className="relative wrap">
      <Header scrollTo = {scrollHandler}/>
      <Slider/>
      <section id="master">
        <Master  scrollTo = {scrollHandler}/>
      </section>
      <section id="our-team">
        <Team/>
      </section>
      <section id="service">
        <Service/>
      </section>
      <section id="product">
        <Products/>
      </section>
      <Desports/>
      <section id="contact">
        <GetInTouch/>
      </section>
      <Footer/>
    </div>
  );
}

export default Home;