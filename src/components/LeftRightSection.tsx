import { ReactNode, ReactElement } from "react";
import './LeftRightSection.css';

interface LeftRightSectionProps {
  left: ReactNode;
  right: ReactNode;
}

export default function LeftRightSection({ left, right }: LeftRightSectionProps): ReactElement {
  return (
    <section className={"left-right-section"}>
      <div className="left-content">{left}</div>
      <div className="right-content">{right}</div>
    </section>
  );
}
