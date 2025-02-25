import {useEffect} from 'react'

import HeroSection from '../components/layout/HeroSection'
import LeftCard from '../components/layout/LeftCard'
import RightCard from '../components/layout/RightCard'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import { leftCardContent, rightCardContent, productionContent} from '../constants';
import ScrollToTop from "../components/layout/ScrollToTop";
import SmallContact from '../components/layout/SmallContact'
import Testimonial from "../components/About/Testimonial";
import ProcessGrid from "../components/Process/ProcessGrid";
import FeaturedClients from '../components/layout/FeatureClients'
import AdditionalInfo from '../components/layout/AdditionalInfo'


const Home = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        <Header />
        <HeroSection/>
        <LeftCard title={leftCardContent.title} content={leftCardContent.content} img={leftCardContent.img} url={leftCardContent.url} btn={leftCardContent.btn} />
        <RightCard title={rightCardContent.title} content={rightCardContent.content} img={rightCardContent.img} url={rightCardContent.url} btn={rightCardContent.btn} />
        <LeftCard title={productionContent.title} content={productionContent.content} img={productionContent.img} url={productionContent.url} btn={productionContent.btn} />
        <AdditionalInfo />
        <FeaturedClients />
        <ProcessGrid />
        <Testimonial />
        <SmallContact />
        <ScrollToTop />
        <Footer/>
    </div>
  )
}

export default Home