import React, { useEffect } from 'react'
import Header from '../components/layout/Header'
import SmallContact from '../components/layout/SmallContact'
import Footer from '../components/layout/Footer'
import Team from '../components/Team/Team'
import TeamContent from '../components/Team/TeamContent'
import ScrollToTop from "../components/layout/ScrollToTop";

const TeamPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <Header />
      <Team />
      <TeamContent />
      <SmallContact />
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default TeamPage