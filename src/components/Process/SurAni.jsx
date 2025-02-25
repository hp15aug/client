import React, { useEffect } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import SmallContact from '../layout/SmallContact'
import VideoSection from '../layout/VideoSecrion'
import SubContent from './SubContent'
import { surani, SURANI_SECTIONS } from '../../constants'
import SubContentImg from './SubContentImg'
import PageSlider from './PageSlider'
import SmallVideo from '../layout/SmallVideo'
import ProcessContent from '../Process/ProcessContent';

const SurAni = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <VideoSection video={surani.url} />
      <SubContent title={surani.title} content={surani.content} client={surani.client} />
      <ProcessContent sections={SURANI_SECTIONS} />
      <SubContentImg img1={surani.img1} img2={surani.img2} clientImg={surani.clientImg} feedback={surani.feedback} img={surani.img} />
      <SmallContact />
      <Footer />
    </div>
  )
}

export default SurAni