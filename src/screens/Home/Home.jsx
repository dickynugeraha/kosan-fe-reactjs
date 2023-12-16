import React from "react";

import SectionHeader from "../../components/Home/SectionHeader";
import SectionOurRoom from "../../components/Home/SectionOurRoom";
import Footer from "../../components/common/Footer";
import SectionFacility from "../../components/Home/SectionFacility";
import NavbarApp from "../../components/common/NavbarApp";

const Home = () => {
  return (
    <>
      <NavbarApp />
      <SectionHeader />
      <div style={{ height: 100 }}></div>
      <SectionOurRoom />
      <div style={{ height: 40 }}></div>
      <SectionFacility />
      <div style={{ height: 100 }}></div>
      <Footer />
    </>
  );
};

export default Home;
