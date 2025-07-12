import { ReactElement } from "react";

export default function portrait(): ReactElement {
  return (
    <div className="portrait-container">
      <img
        src="image/daemon-cover-photo.png"
        alt="Portrait"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}