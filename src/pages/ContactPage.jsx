import React, { useEffect } from "react";
import Footer from "../components/layout/Footer";
import Contact from "../components/Contact/Contact"; 
import Header from "../components/layout/Header";
import ContactForm from "../components/Contact/ContactForm";
import ContactContent from "../components/Contact/ContactContent";
import ScrollToTop from "../components/layout/ScrollToTop";

const ContactPage = () => { 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Contact />
      {/* <ContactForm /> */}
      <ContactContent />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ContactPage;
