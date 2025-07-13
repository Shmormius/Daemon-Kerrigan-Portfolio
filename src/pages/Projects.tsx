import { ReactElement } from "react";
import Header from '../components/Header';
import Footer from "../components/Footer";
import ProjectTile from "../components/Projects/ProjectTile";
import "./Projects.css";

const projects = [
  {
    to: "/projects/building-classification",
    image: "image/project-thumbnail/Picture3.png",
    title: "CSU building classification",
    description: "CSU's 1st Machine learning competition winning submission",
    attributes: ["Python", "Resnet50", "Machine Learning"]
  },
  {
    to: "/projects/web-scraper",
    image: "image/project-thumbnail/graph.png",
    title: "Web Scraper W/. Github Actions",
    description: "Game data web scraper with automated data collection and visualization",
    attributes: ["Python", "BeautifulSoup", "Github Actions"]
  },
  {
    to: "/projects/autonomous-rover",
    image: "image/project-thumbnail/rover-desk.jpg",
    title: "Autonomous Rover",
    description: "Internet controlled rover with autonomous GPS capabilities",
    attributes: ["C++", "Arduino", "Flask"]
  },
  {
    to: "/projects/Static-Portfolio-Website",
    image: "image/project-thumbnail/javascript.png",
    title: "Static Portfolio Website",
    description: "Github Pages hosted portfolio website",
    attributes: ["HTML", "CSS", "JavaScript"]
  },
  {
    to: "/projects/Consumer-Producer-Problem",
    image: "image/project-thumbnail/consumer.png",
    title: "Comsumer Producer Problem",
    description: "The consumer producer problem implemented in Java",
    attributes: ["Java", "Threads", "Concurrency"]
  }
];

export default function Projects(): ReactElement {
  return (
    <div className="Project-container">
      <Header subtitle="Projects"/>
      <div className="projects-content">
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <ProjectTile key={idx} {...proj} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}