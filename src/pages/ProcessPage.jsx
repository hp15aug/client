import React, { useEffect } from "react";
import Header from '../components/layout/Header'
import SmallContact from '../components/layout/SmallContact'
import Footer from '../components/layout/Footer'
import ProcessHero from "../components/Process/ProcessHero";
import ProcessGrid from "../components/Process/ProcessGrid";
import ScrollToTop from "../components/layout/ScrollToTop";
import Explore from "../components/Process/Explore";


const ProcessPage = () => {
      useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <div>
      <Header />
      <ProcessHero />
      <Explore />
      <ProcessGrid />
      <SmallContact />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ProcessPage;
