import { ReactElement } from "react";
import './TextBlock.css';

interface TextBlockProps {
  title: string;
  text: string;
}

export default function TextBlock({ title, text }: TextBlockProps): ReactElement {
  return (
    <div className="text-block">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}