import { ReactElement } from "react";

interface QualificationCardProps {
  title: string;
  items: readonly string[];
}

export default function QualificationCard({
  title,
  items,
}: QualificationCardProps): ReactElement {
  return (
    <div className="qualification-card">
      <h2>{title}</h2>
      <p>{items.join(", ")}</p>
    </div>
  );
}