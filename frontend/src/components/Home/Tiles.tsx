import { ReactElement } from "react";
import Glass from "../shared/glass";
import QualificationCard from "./qualification-card";
import { GlassConfig } from "../../types";
import { SKILLS } from "../../constants";
import './Tiles.css';

const glassStyle: GlassConfig = {
  enableRainBackground: true,
  enableHoverEffect: true,
};

export default function Tiles(): ReactElement {
  return (
      <div className="box-container">
          <QualificationCard
            title="Programming"
            items={SKILLS.PROGRAMMING}
          />
          <QualificationCard
            title="Machine Learning"
            items={SKILLS.MACHINE_LEARNING}
          />
          <QualificationCard
            title="Web Development"
            items={SKILLS.WEB_DEVELOPMENT}
          />
          <QualificationCard
            title="Agile Methodologies"
            items={SKILLS.AGILE}
          />
      </div>
  );
}