import { ReactElement } from "react";
import Header from '../components/shared/Header';
import Footer from "../components/shared/Footer";
import BlogTile from "../components/Blog/BlogTile";
import { BlogPost } from "../types";
import "./styles/Blog.css";

const blogposts: BlogPost[] = [
  {
    to: "book-journal",
    image: "image/blog-thumbnail/nolongerhuman.jpg",
    title: "Book Journal",
    description: "Record of Books I've Read. Originally started as a 2024 New Years Resolution to read more.",
    date: "March 15, 2024"
  },
  {
    to: "anime-ranking",
    image: "image/blog-thumbnail/madeinheaven.jpg",
    title: "Anime Ranking",
    description: "This a list of every anime I've ever seen, ranked from best to worst. I must have watched at least half of a given anime to be included in this list.",
    date: "June 24, 2024"
  }
];

export default function Blog(): ReactElement {
  return (
    <div className="Blog-container">
      <Header subtitle="Blog"/>
      <div className="blog-elements">
        <div className="blog-grid">
          {blogposts.map((post, idx) => (
            <BlogTile key={idx} {...post} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
