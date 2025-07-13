import { ReactElement } from "react";
import './MapViewer.css';

interface MapViewerProps {
  src: string;
  width?: string | number;
  height?: string | number;
}

export default function MapViewer({ src }: MapViewerProps): ReactElement {
  return (
    <div className="map-container">
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}