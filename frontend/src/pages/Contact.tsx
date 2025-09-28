import { ReactElement, useEffect, useState } from "react";
import Header from '../components/shared/Header';
import Footer from "../components/shared/Footer";
import LeftRightSection from "../components/shared/LeftRightSection";
import ContactCard from "../components/Contact/ContactCard";
import ContactInput from "../components/Contact/ContactInput";
import './styles/Contact.css';
import Glass from "../components/shared/glass";

export default function Contact(): ReactElement {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="contact-container">
      <Header subtitle="Contact Me"/>
      <div className="contact-content">
        {isMobile ? (
          // Mobile: LeftRightSection outside of Glass
          <LeftRightSection left={<ContactCard />} right={<ContactInput />} />
        ) : (
          // Desktop: LeftRightSection inside Glass
          <Glass>
            <LeftRightSection left={<ContactCard />} right={<ContactInput />} />
          </Glass>
        )}
      </div>
      <Footer />
    </div>
  );
}