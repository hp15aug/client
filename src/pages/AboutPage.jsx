import React from "react";
import { useEffect } from "react";
import Header from "../components/layout/Header";
import SmallContact from "../components/layout/SmallContact";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";
import About from "../components/About/About";
import AboutContent from "../components/About/AboutContent";
import Testimonial from "../components/About/Testimonial";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <About />
      <AboutContent />
      <Testimonial />
      <SmallContact />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default AboutPage;
