import { cn } from "@/lib/cn";

const inputClass =
  "focus-ring w-full rounded-sm border border-line bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted/60 transition-colors focus-visible:border-gold";

export function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-navy">
      {children}
      {required && <span className="ml-1 text-gold">*</span>}
    </label>
  );
}

export function TextField({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
  value,
  onChange,
  className,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </div>
  );
}

export function TextareaField({
  name,
  label,
  required = false,
  placeholder,
  value,
  onChange,
  className,
  rows = 4,
}: {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  rows?: number;
}) {
  return (
    <div className={className}>
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(inputClass, "resize-y")}
      />
    </div>
  );
}

export function SelectField({
  name,
  label,
  required = false,
  value,
  onChange,
  options,
  placeholder = "Select…",
  className,
}: {
  name: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(inputClass, "appearance-none bg-[right_1rem_center] bg-no-repeat")}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export function RadioGroupField({
  name,
  label,
  required = false,
  value,
  onChange,
  options,
  className,
}: {
  name: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
}) {
  return (
    <fieldset className={className}>
      <legend className="mb-2 text-sm font-medium text-navy">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </legend>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <label
            key={opt}
            className={cn(
              "focus-ring cursor-pointer rounded-sm border px-5 py-2.5 text-sm transition-colors",
              value === opt
                ? "border-navy bg-navy text-white"
                : "border-line text-charcoal/80 hover:border-navy/40"
            )}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={(e) => onChange(e.target.value)}
              required={required}
              className="sr-only"
            />
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function CheckboxField({
  name,
  checked,
  onChange,
  required = false,
  children,
}: {
  name: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/80">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        required={required}
        onChange={(e) => onChange(e.target.checked)}
        className="focus-ring mt-1 h-4 w-4 shrink-0 accent-navy"
      />
      <span>{children}</span>
    </label>
  );
}
