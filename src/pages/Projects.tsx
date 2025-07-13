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
    to: "/projects/building-classification",
    image: "image/project-thumbnail/Picture3.png",
    title: "CSU building classification",
    description: "CSU's 1st Machine learning competition winning submission",
    attributes: ["Python", "Resnet50", "Machine Learning"]
  },
  {
    to: "/projects/building-classification",
    image: "image/project-thumbnail/Picture3.png",
    title: "CSU building classification",
    description: "CSU's 1st Machine learning competition winning submission",
    attributes: ["Python", "Resnet50", "Machine Learning"]
  },
  {
    to: "/projects/building-classification",
    image: "image/project-thumbnail/Picture3.png",
    title: "CSU building classification",
    description: "CSU's 1st Machine learning competition winning submission",
    attributes: ["Python", "Resnet50", "Machine Learning"]
  },
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