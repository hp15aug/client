import {useEffect} from 'react'
import Footer from '../components/layout/Footer'
import SmallContact from '../components/layout/SmallContact'
import VideoSection from '../components/layout/VideoSecrion';
import Header from '../components/layout/Header';
import { showreel } from '../constants';
import ScrollToTop from "../components/layout/ScrollToTop";
import ShowreelContent from '../components/Showreel/ShowreelContent';
import ProcessGrid from "../components/Process/ProcessGrid";

const Showreel = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Header />
      <VideoSection poster={showreel.poster} video={showreel.video} />
      <ShowreelContent />
      <ProcessGrid />
      <SmallContact />
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default Showreel