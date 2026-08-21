"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { submitNetlifyForm } from "@/lib/netlifyForm";
import { TextField, TextareaField, CheckboxField } from "./fields";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitNetlifyForm("contact", {
        name,
        email,
        phone,
        message,
        consent: consent ? "yes" : "no",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-line bg-offwhite p-10 text-center">
        <CircleCheck size={36} className="mx-auto text-gold" strokeWidth={1.5} />
        <h2 className="mt-5 text-2xl text-navy">Message received</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          Thank you for reaching out. A member of our team will get back to you
          using the contact information you provided.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" />
        </label>
      </p>

      <TextField name="name" label="Name" required value={name} onChange={setName} />
      <TextField name="email" label="Email" type="email" required value={email} onChange={setEmail} />
      <TextField name="phone" label="Phone" type="tel" value={phone} onChange={setPhone} />
      <TextareaField name="message" label="Message" required value={message} onChange={setMessage} rows={5} />

      <CheckboxField name="consent" checked={consent} onChange={setConsent} required>
        I consent to Golden Horizon Asset Recovery contacting me regarding this
        inquiry using the contact information I provided.
      </CheckboxField>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending your message. Please try again in a moment.
        </p>
      )}

      <SubmitButton submitting={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </SubmitButton>
    </form>
  );
}
