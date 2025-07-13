import { ReactElement } from "react";
import Header from '../components/Header';
import Footer from "../components/Footer";

export default function Projects(): ReactElement {
  return (
    <div className="Project-container">
      <Header subtitle="Projects"/>
      <Footer />
    </div>
  );
}