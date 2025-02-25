import React from "react";
import { useEffect } from "react";
import Header from "../components/layout/Header";
import SmallContact from "../components/layout/SmallContact";
import Footer from "../components/layout/Footer";
import VideoSection from "../components/layout/VideoSecrion";
import { ar } from "../constants";
import ScrollToTop from "../components/layout/ScrollToTop";

const ArPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <VideoSection video={ar.video} poster={ar.poster} />
      <SmallContact />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ArPage;
