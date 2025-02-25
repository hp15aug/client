import React, { useEffect } from 'react'
import Header from '../layout/Header'
import SmallContact from '../layout/SmallContact'
import Footer from '../layout/Footer'
import VideoSection from '../layout/VideoSecrion'
import { arvr, mouthcare } from '../../constants'
import MouthCareContent from './MouthCareContent'
import SubContentImg from './SubContentImg'

const MouthCare = () => {
      useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <Header />
      <VideoSection video={mouthcare.url} />
      <MouthCareContent />
      <SubContentImg img1={mouthcare.img1} img2={mouthcare.img2} clientImg={arvr.clientImg} feedback={mouthcare.feedback} img={mouthcare.img} />
      <SmallContact />
      <Footer />
    </div>
  )
}

export default MouthCare