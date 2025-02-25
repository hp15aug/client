import React, { useEffect } from 'react'
import Header from '../layout/Header'
import VideoSection from '../layout/VideoSecrion'
import { moa, showreel } from '../../constants'
import SubContent from './SubContent'
import SmallContact from '../layout/SmallContact'
import Footer from '../layout/Footer'
import SubContentImg from './SubContentImg'
import SmallVideo from '../layout/SmallVideo'

const MOA = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header />
            <VideoSection video={moa.url} />
            <SubContent title={moa.title} content={moa.content} client={moa.client} />
            <SmallVideo title={"Showreel"} url={moa.mainurl} />
            <SubContentImg img1={moa.img1} img2={moa.img2} clientImg={moa.clientImg} feedback={moa.feedback} img={moa.img} />
            <SmallContact />
            <Footer />
        </div>
    )
}

export default MOA