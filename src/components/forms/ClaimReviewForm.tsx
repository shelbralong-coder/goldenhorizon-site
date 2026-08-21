"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { US_STATES } from "@/lib/usStates";
import { services } from "@/content/services";
import { submitNetlifyForm } from "@/lib/netlifyForm";
import {
  TextField,
  SelectField,
  TextareaField,
  RadioGroupField,
  CheckboxField,
} from "./fields";

const claimTypeOptions = [...services.map((s) => s.name), "Not sure / other"];

type Status = "idle" | "submitting" | "success" | "error";

export function ClaimReviewForm() {
  const [status, setStatus] = useState<Status>("idle");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [state, setState] = useState("");
  const [county, setCounty] = useState("");
  const [claimType, setClaimType] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [nameOnRecord, setNameOnRecord] = useState("");
  const [approximateAmount, setApproximateAmount] = useState("");

  const [deceased, setDeceased] = useState("");
  const [relationship, setRelationship] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const data: Record<string, string> = {
      "first-name": firstName,
      "last-name": lastName,
      phone,
      email,
      state,
      county,
      "claim-type": claimType,
      "property-address": propertyAddress,
      "case-number": caseNumber,
      "name-on-record": nameOnRecord,
      "approximate-amount": approximateAmount,
      "person-deceased": deceased,
      consent: consent ? "yes" : "no",
    };
    if (deceased === "Yes") {
      data["relationship-to-person"] = relationship;
      data["additional-information"] = additionalInfo;
    }

    try {
      await submitNetlifyForm("claim-review", data);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-line bg-offwhite p-10 text-center">
        <CircleCheck size={36} className="mx-auto text-gold" strokeWidth={1.5} />
        <h2 className="mt-5 text-2xl text-navy">Thank you</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          Your information has been received for preliminary review. A member of
          our research team will follow up using the contact information you
          provided. Submitting this form does not guarantee claim eligibility or
          recovery.
        </p>
      </div>
    );
  }

  return (
    <form
      name="claim-review"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you"
      onSubmit={handleSubmit}
      className="space-y-12"
    >
      <input type="hidden" name="form-name" value="claim-review" />
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" />
        </label>
      </p>

      <div>
        <h2 className="text-lg text-navy">Contact information</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TextField name="first-name" label="First Name" required value={firstName} onChange={setFirstName} />
          <TextField name="last-name" label="Last Name" required value={lastName} onChange={setLastName} />
          <TextField name="phone" label="Phone" type="tel" required value={phone} onChange={setPhone} />
          <TextField name="email" label="Email" type="email" required value={email} onChange={setEmail} />
        </div>
      </div>

      <div>
        <h2 className="text-lg text-navy">Claim information</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <SelectField name="state" label="State" required value={state} onChange={setState} options={[...US_STATES]} />
          <TextField name="county" label="County" value={county} onChange={setCounty} />
          <SelectField
            name="claim-type"
            label="Type of Claim"
            required
            value={claimType}
            onChange={setClaimType}
            options={claimTypeOptions}
            className="sm:col-span-2"
          />
          <TextField
            name="property-address"
            label="Property Address (if applicable)"
            value={propertyAddress}
            onChange={setPropertyAddress}
            className="sm:col-span-2"
          />
          <TextField name="case-number" label="Case Number (if known)" value={caseNumber} onChange={setCaseNumber} />
          <TextField name="name-on-record" label="Name Appearing on Record" required value={nameOnRecord} onChange={setNameOnRecord} />
          <TextField
            name="approximate-amount"
            label="Approximate Amount (if known)"
            value={approximateAmount}
            onChange={setApproximateAmount}
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg text-navy">Heir information</h2>
        <div className="mt-6 space-y-6">
          <RadioGroupField
            name="person-deceased"
            label="Is the person named on the record deceased?"
            required
            value={deceased}
            onChange={setDeceased}
            options={["Yes", "No", "Unsure"]}
          />
          {deceased === "Yes" && (
            <div className="grid grid-cols-1 gap-6 border-l-2 border-gold/40 pl-6 sm:grid-cols-2">
              <TextField
                name="relationship-to-person"
                label="What is your relationship to the person?"
                required
                value={relationship}
                onChange={setRelationship}
                className="sm:col-span-2"
              />
              <TextareaField
                name="additional-information"
                label="Additional information"
                value={additionalInfo}
                onChange={setAdditionalInfo}
                className="sm:col-span-2"
              />
            </div>
          )}
        </div>
      </div>

      <div className="space-y-5 border-t border-line pt-8">
        <CheckboxField name="consent" checked={consent} onChange={setConsent} required>
          I consent to Golden Horizon Asset Recovery contacting me regarding this
          inquiry using the contact information I provided.
        </CheckboxField>
        <p className="text-xs leading-relaxed text-muted">
          By submitting this form and checking the box above, you consent to
          receive calls and text messages (including by autodialer or prerecorded
          message) from Golden Horizon Asset Recovery at the phone number
          provided, regarding your inquiry. Consent is not a condition of any
          service. Message and data rates may apply, and message frequency
          varies. Reply STOP at any time to opt out.
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong submitting the form. Please try again, or reach us
          directly from the Contact page.
        </p>
      )}

      <SubmitButton submitting={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit Claim Review Request"}
      </SubmitButton>
    </form>
  );
}
