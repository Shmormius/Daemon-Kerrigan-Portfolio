import { Link } from "react-router-dom";
import "./ProjectTile.css";

interface ProjectTileProps {
  to: string;
  image: string;
  title: string;
  description: string;
  attributes: string[];
}

export default function ProjectTile({ to, image, title, description, attributes }: ProjectTileProps) {
  return (
    <Link to={to} className="project">
      <img src={image} alt={title} />
      <div className="project-text">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="attributes">
          {attributes.map((attr, idx) => (
            <p key={idx}>{attr}</p>
          ))}
        </div>
      </div>
    </Link>
  );
}