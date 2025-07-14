import { ReactElement } from "react";
import Header from '../components/shared/Header';
import Footer from "../components/shared/Footer";
import ModelViewer from "../components/About/ModelViewer";
import TextBlock from "../components/shared/TextBlock";
import MapViewer from "../components/About/MapViewer";
import LeftRightSection from "../components/shared/LeftRightSection";
import ClassList from "../components/About/ClassList";
import './styles/About.css';

const pictureModelPath: string = "3d/aboutme.glb"; 
const globeModelPath: string = "3d/worlds.glb"; 

const billgoUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d660.0637721599442!2d-105.02269622363323!3d40.52266494945414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876eb34f9f53dceb%3A0x642b964884f7a666!2s3003%20E%20Harmony%20Rd%20%23500%2C%20Fort%20Collins%2C%20CO%2080528!5e0!3m2!1sen!2sus!4v1752382026249!5m2!1sen!2sus"
const ramshornUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.6327789037246!2d-105.09610781069098!3d40.57178597249444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694a4e23935157%3A0x2aa1323a7c5066be!2sRam's%20Horn%20Dining%20Center!5e0!3m2!1sen!2sus!4v1704701541764!5m2!1sen!2sus"
const registrarsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.5126562649693!2d-105.0823248235917!3d40.574438146025045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694ba95a721b29%3A0xf252bb962fe8f1ee!2sRegistrar's%20Office!5e0!3m2!1sen!2sus!4v1704701602416!5m2!1sen!2sus"

const aboutTextBlockContent = {
  title: "About Me",
  text: "My name is Daemon Kerrigan, I am a Computer Scientist and Software Engineer based in Fort Collins, Colorado. I graduated from Colorado State University with a Bachelor's of Science in Computer Science in May 2025."
};

const umaretaTextBlockContent = {
title: "Where Im From",
  text: "I was born in Sparta Iliinois in 2003 but moved to Salida Colorado in 2017. I consider Salida my hometown, as I spent my formative years there. I moved to Fort Collins in 2021 to attend Colorado State University and have lived here ever since."
};

const billgoTextBlockContent = {
  title: "BillGO | Fort Collins, CO | AI/ML Intern | May 2025 - August 2025",
  text: ""
};

const registrarTextBlockContent = {
  title: "CSU Registrar's Office | Fort Collins, CO | Student Employee | June 2023 - May 2025",
  text: ""
};

const ramshornTextBlockContent = {
  title: "Ram's Horn Dining Center | Fort Collins, CO | Student Employee | November 2021 - May 2023",
  text: ""
};

const educationTextBlockContent = {
  title: "Education",
  text: "From 2021 to 2025, I attended Colorado State University, where I earned a Bachelor's of Science in Computer Science with a minor in Japanese. I have completed a wide variety of courcework related to general computer science and Japanese. The classes I took during my undergrad are listed on the right."
};

const pictureModel = <ModelViewer
            src={pictureModelPath}
            alt="Framed Picture of Daemon"
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            style={{ width: "100%", height: "400px" }}
          />

const globeModel = <ModelViewer
            src={globeModelPath}
            alt="Globe Model"
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            style={{ width: "100%", height: "400px" }}
/>

const billgoMap = <MapViewer src={billgoUrl}/>;
const ramshornMap = <MapViewer src={ramshornUrl}/>;
const registrarsMap = <MapViewer src={registrarsUrl}/>;

const aboutTextBlock = <TextBlock title={aboutTextBlockContent.title} text={aboutTextBlockContent.text} />;
const umaretaTextBlock = <TextBlock title={umaretaTextBlockContent.title} text={umaretaTextBlockContent.text} />;
const billgoTextBlock = <TextBlock title={billgoTextBlockContent.title} text={billgoTextBlockContent.text} />;
const ramshornTextBlock = <TextBlock title={ramshornTextBlockContent.title} text={ramshornTextBlockContent.text} />;
const registrarsTextBlock = <TextBlock title={registrarTextBlockContent.title} text={registrarTextBlockContent.text} />;
const educationTextBlock = <TextBlock title={educationTextBlockContent.title} text={educationTextBlockContent.text} />;

export default function About(): ReactElement {
  return (
    <div className="about-container">
      <Header subtitle="About Me"/>
      <div className="about-content-container">
        <LeftRightSection
          left={pictureModel}
          right={aboutTextBlock}
        />
        <hr/>
        <LeftRightSection
          left={umaretaTextBlock}
          right={globeModel}
        />
        <hr/>
        <LeftRightSection
          left={billgoMap}
          right={billgoTextBlock}
        />
        <LeftRightSection
          left={registrarsMap}
          right={registrarsTextBlock}
        />
        <LeftRightSection
          left={ramshornMap}
          right={ramshornTextBlock}
        />
        <hr/>
        <LeftRightSection
          left={educationTextBlock}
          right={<ClassList />}
        />
      </div>
      <Footer />
    </div>
  );
}