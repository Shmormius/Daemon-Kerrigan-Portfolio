import { ReactElement } from "react";
import Header from '../components/Header';
import Footer from "../components/Footer";

export default function About(): ReactElement {
  return (
    <div className="about-container">
      <Header subtitle="About Me"/>
      <Footer />
    </div>
  );
}