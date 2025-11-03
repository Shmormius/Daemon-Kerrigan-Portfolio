import { ReactElement } from "react";
import Header from '../components/shared/Header';
import Footer from "../components/shared/Footer";
import ProjectTile from "../components/Projects/ProjectTile";
import { Project } from "../types";
import "./styles/Projects.css";

const projects: Project[] = [
  {
    id: "building-classification",
    to: "/projects/building-classification",
    image: "image/project-thumbnail/Picture3.png",
    title: "CSU building classification",
    description: "CSU's 1st Machine learning competition winning submission",
    attributes: ["Python", "Resnet50", "Machine Learning"]
  },
  {
    id: "web-scraper",
    to: "/projects/web-scraper",
    image: "image/project-thumbnail/graph.png",
    title: "Web Scraper W/. Github Actions",
    description: "Game data web scraper with automated data collection and visualization",
    attributes: ["Python", "BeautifulSoup", "Github Actions"]
  },
  {
    id: "autonomous-rover",
    to: "/projects/autonomous-rover",
    image: "image/project-thumbnail/rover-desk.jpg",
    title: "Autonomous Rover",
    description: "Internet controlled rover with autonomous GPS capabilities",
    attributes: ["C++", "Arduino", "Flask"]
  },
  {
    id: "static-portfolio-website",
    to: "/projects/static-portfolio-website",
    image: "image/project-thumbnail/javascript.png",
    title: "Static Portfolio Website",
    description: "Github Pages hosted portfolio website",
    attributes: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "consumer-producer-problem",
    to: "/projects/consumer-producer-problem",
    image: "image/project-thumbnail/consumer.png",
    title: "Consumer Producer Problem",
    description: "The consumer producer problem implemented in Java",
    attributes: ["Java", "Threads", "Concurrency"]
  }
];

export default function Projects(): ReactElement {
  return (
    <div className="Project-container">
      <Header subtitle="Projects"/>
      <div className="projects-content">
        <p>Coming Soon...</p>
        <img src="/image/placeholders/jackhanmer-construction-worker.gif" alt="Coming Soon" />
      </div>
      <Footer />
    </div>
  );
}