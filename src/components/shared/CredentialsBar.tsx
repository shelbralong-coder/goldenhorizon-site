import { credentials } from "@/content/credentials";

export function CredentialsBar() {
  if (credentials.length === 0) return null;

  return (
    <div className="border-y border-line bg-offwhite py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-sm text-muted">
        {credentials.map((c) => (
          <span key={c.label}>
            <span className="font-medium text-navy">{c.label}</span>
            {c.detail ? ` — ${c.detail}` : ""}
          </span>
        ))}
      </div>
    </div>
  );
}
