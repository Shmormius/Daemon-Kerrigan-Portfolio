import { ReactElement } from "react";
import Header from '../components/Header';
import Footer from "../components/Footer";

export default function Contact(): ReactElement {
  return (
    <div className="contact-container">
      <Header subtitle="Contact Me"/>
      <Footer />
    </div>
  );
}