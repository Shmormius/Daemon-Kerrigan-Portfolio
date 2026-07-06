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
    image: "/image/project-thumbnail/Picture3.png",
    title: "CSU Building Classification",
    description: "Winning submission for CSU's first Machine Learning competition",
    attributes: ["Python", "PyTorch", "ResNet50"]
  },
  {
    id: "web-scraper",
    to: "/projects/web-scraper",
    image: "/image/project-thumbnail/graph.png",
    title: "Web Scraper with GitHub Actions",
    description: "Automated game-stats scraper with scheduled data collection and charts",
    attributes: ["Python", "BeautifulSoup", "GitHub Actions"]
  },
  {
    id: "autonomous-rover",
    to: "/projects/autonomous-rover",
    image: "/image/project-thumbnail/rover-desk.jpg",
    title: "Autonomous Rover",
    description: "GPS-guided, internet-controlled rover on Arduino and Raspberry Pi",
    attributes: ["C++", "Arduino", "Flask"]
  },
  {
    id: "static-portfolio-website",
    to: "/projects/static-portfolio-website",
    image: "/image/project-thumbnail/javascript.png",
    title: "Static Portfolio Website",
    description: "The original hand-built portfolio hosted on GitHub Pages",
    attributes: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "consumer-producer-problem",
    to: "/projects/consumer-producer-problem",
    image: "/image/project-thumbnail/consumer.png",
    title: "Producer-Consumer Problem",
    description: "Bounded-buffer concurrency solved with Java threads",
    attributes: ["Java", "Threads", "Concurrency"]
  }
];

export default function Projects(): ReactElement {
  return (
    <div className="Project-container">
      <Header subtitle="Projects" />
      <div className="projects-content">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectTile
              key={project.id}
              to={project.to}
              image={project.image}
              title={project.title}
              description={project.description}
              attributes={project.attributes}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
