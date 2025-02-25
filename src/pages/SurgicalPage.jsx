import React from "react";
import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import VideoSection from "../components/layout/VideoSecrion";
import SmallContact from "../components/layout/SmallContact";
import { surgical } from "../constants";
import ScrollToTop from "../components/layout/ScrollToTop";


const SurgicalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <VideoSection video={surgical.video} poster={surgical.poster} />
      <SmallContact />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default SurgicalPage;
