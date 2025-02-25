import { useEffect } from "react";
import Footer from "../components/layout/Footer";
import SmallContact from "../components/layout/SmallContact";
import MedicalAnimation from "../components/Work/MedicalAnimation";
import { medicalAnimation, surgical, ar, work } from "../constants";
import Surgical from "../components/Work/Surgical";
import Header from "../components/layout/Header";
import CommonLayout from "../components/layout/CommonLayout";
import ScrollToTop from "../components/layout/ScrollToTop";


const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <CommonLayout title={work.title} content={work.content} subtitle={work.subtitle} />
      <MedicalAnimation
        title={medicalAnimation.title}
        content={medicalAnimation.content}
        path={medicalAnimation.path}
        img= {medicalAnimation.img}

      />
      <Surgical
        title={surgical.title}
        content={surgical.content}
        path={surgical.path}
        img= {surgical.img}
      />
      <MedicalAnimation title={ar.title} content={ar.content} path={ar.path} img={ar.img} />
      <SmallContact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WorkPage;
