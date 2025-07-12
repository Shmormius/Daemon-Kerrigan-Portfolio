import { ReactElement } from "react";
import './Intro.css';

export default function Intro(): ReactElement {
  return (
    <div className="intro-container">
        <h1>Hello my name is <span>Daemon Kerrigan</span>, Check out my projects here:</h1>
    </div>
  );
}