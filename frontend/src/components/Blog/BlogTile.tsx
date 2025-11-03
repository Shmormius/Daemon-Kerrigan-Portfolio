import { Link } from "react-router-dom";
import { ReactElement } from "react";
import "./BlogTile.css";

interface BlogTileProps {
  to: string;
  image: string;
  title: string;
  description: string;
  date: string;
}

export default function BlogTile({ to, image, title, description, date }: BlogTileProps): ReactElement {
  return (
    <Link to={to} className="blog-post">
      <img src={image} alt={title} />
      <div className="blog-text">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </Link>
  );
}