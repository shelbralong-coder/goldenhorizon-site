export function encodeFormData(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export async function submitNetlifyForm(formName: string, data: Record<string, string>) {
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodeFormData({ "form-name": formName, ...data }),
  });
  if (!res.ok) {
    throw new Error(`Form submission failed with status ${res.status}`);
  }
}
