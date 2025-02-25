import React, { useEffect } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import SmallContact from '../layout/SmallContact'
import VideoSection from '../layout/VideoSecrion'
import SubContent from './SubContent'
import { arvr, showreel } from '../../constants'
import SubContentImg from './SubContentImg'
import ThreeColumns from "./ThreeColumns";

const ARVR = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <VideoSection poster={arvr.poster} video={arvr.video} />
      <SubContent title={arvr.title} content={arvr.content} client={arvr.client} />
      <ThreeColumns />
      <SubContentImg img1={arvr.img1} img2={arvr.img2} clientImg={arvr.clientImg} feedback={arvr.feedback} />
      <SmallContact />
      <Footer />
    </div>
  )
}

export default ARVR