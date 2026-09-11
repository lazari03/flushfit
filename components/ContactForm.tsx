"use client";

import { useState } from "react";
import { CONTACT_FIELDS } from "@/lib/data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2400);
  };

  return (
    <form onSubmit={handleSubmit} className="form-panel">
      <div className="form-title">Send a question</div>
      {CONTACT_FIELDS.map((f) => (
        <label key={f.name} className="field">
          {f.label}
          <input type={f.type} name={f.name} placeholder={f.placeholder} required={f.name !== "company"} />
        </label>
      ))}
      <label className="field">
        Message
        <textarea rows={4} name="message" placeholder="What are you specifying?" />
      </label>
      <button type="submit" className="btn btn-dark" style={{ padding: 15 }}>
        {sent ? "Message sent ✓" : "Send message"}
      </button>
    </form>
  );
}
