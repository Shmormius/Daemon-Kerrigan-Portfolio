import { ReactElement, useState } from "react";
import { ContactFormData } from "../../types";
import { useApi } from "../../hooks";
import { ValidationUtils } from "../../utils";
import "./ContactInput.css";

export default function ContactInput(): ReactElement {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    subject: "",
    message: "",
  });
  const { loading, error, execute } = useApi();

  const handleChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!ValidationUtils.isNotEmpty(formData.name)) {
      return;
    }
    if (!ValidationUtils.isNotEmpty(formData.subject)) {
      return;
    }
    if (!ValidationUtils.isNotEmpty(formData.message)) {
      return;
    }

    try {
      await execute("/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      
      // Reset form on success
      setFormData({ name: "", subject: "", message: "" });
    } catch (err) {
      // Error is handled by the hook
    }
  };

  return (
    <div className="right-contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-control">
          <input
            type="text"
            required
            placeholder="YOUR NAME"
            id="name"
            value={formData.name}
            onChange={handleChange("name")}
          />
        </div>
        <div className="input-control">
          <input
            type="text"
            required
            placeholder="ENTER SUBJECT"
            id="subject"
            value={formData.subject}
            onChange={handleChange("subject")}
          />
        </div>
        <div className="input-control">
          <textarea
            cols={15}
            rows={8}
            required
            placeholder="Message Here..."
            id="message"
            value={formData.message}
            onChange={handleChange("message")}
          ></textarea>
        </div>
        <button className="main-btn" id="btn" type="submit" disabled={loading}>
          <span className="btn-text">{loading ? "Sending..." : "Submit"}</span>
        </button>
        {error && <div className="form-status error">{error.message}</div>}
      </form>
    </div>
  );
}