import { ReactElement } from "react";
import Header from '../components/shared/Header';
import Footer from "../components/shared/Footer";
import LeftRightSection from "../components/shared/LeftRightSection";
import ContactCard from "../components/Contact/ContactCard";
import ContactInput from "../components/Contact/ContactInput";
import './styles/Contact.css';
import Glass from "../components/shared/glass";

export default function Contact(): ReactElement {
  return (
    <div className="contact-container">
      <Header subtitle="Contact Me"/>
      <div className="contact-content">
        <Glass>
          <LeftRightSection left={<ContactCard />} right={<ContactInput />} />
        </Glass>
      </div>
      <Footer />
    </div>
  );
}