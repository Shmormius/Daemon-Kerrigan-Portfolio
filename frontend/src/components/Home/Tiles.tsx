import { ReactElement, useState, useEffect } from "react";
import Glass from "../shared/glass";
import QualificationCard from "./qualification-card";
import { GlassConfig } from "../../types";
import { SKILLS } from "../../constants";
import './Tiles.css';

const glassStyle: GlassConfig = {
  enableRainBackground: true,
  enableHoverEffect: true,
};

const skillSections = [
  { title: "Programming", items: SKILLS.PROGRAMMING },
  { title: "Machine Learning", items: SKILLS.MACHINE_LEARNING },
  { title: "Web Development", items: SKILLS.WEB_DEVELOPMENT },
  { title: "Agile Methodologies", items: SKILLS.AGILE }
];

export default function Tiles(): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skillSections.length);
        setIsVisible(true);
      }, 300);
      
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentSkill = skillSections[currentIndex];

  return (
    <div className="single-tile-container">
      <div className={`tile-wrapper ${isVisible ? 'visible' : 'hidden'}`}>
        <QualificationCard
          title={currentSkill.title}
          items={currentSkill.items}
        />
      </div>
    </div>
  );
}