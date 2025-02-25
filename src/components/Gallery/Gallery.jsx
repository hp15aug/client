import React, { useEffect } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import VideoGrid from './VideoGrid'
import SmallContact from '../layout/SmallContact'

const Gallery = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <Header />
        <VideoGrid />
        <SmallContact />
        <Footer />
    </div>
  )
}

export default Gallery