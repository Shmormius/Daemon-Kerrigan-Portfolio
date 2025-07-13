import { ReactElement } from "react";

export default function ContactInput(): ReactElement {
  return (
    <div className="right-contact">
      <form action="/submit" method="post" className="contact-form">
        <div className="input-control">
          <input
            type="text"
            required
            placeholder="YOUR NAME"
            id="name"
          />
        </div>
        <div className="input-control">
          <input
            type="text"
            required
            placeholder="ENTER SUBJECT"
            id="subject"
          />
        </div>
        <div className="input-control">
          <textarea
            cols={15}
            rows={8}
            required
            placeholder="Message Here..."
            id="message"
          ></textarea>
        </div>
        <button className="main-btn" id="btn" type="submit">
          <span className="btn-text">Submit</span>
        </button>
      </form>
    </div>
  );
}