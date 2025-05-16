import React from "react";
import MainSection from "./components/MainSection";
import Gallery from "./components/Gallery";
import Instagram from "./components/Instagram";

const Home = () => {
  return (
    <>
      <section id="home">
        <MainSection />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      {/* <section id="gallery">
        <Instagram />
      </section> */}
    </>
  );
};

export default Home;
