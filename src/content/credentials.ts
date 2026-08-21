// Add verified credentials here once available (BBB accreditation, professional
// memberships, certifications, licenses, government registrations, attorney
// relationships, etc.). The CredentialsBar component hides itself when this is
// empty — never invent or display unverified credentials.
export type Credential = {
  label: string;
  detail?: string;
};

export const credentials: Credential[] = [];
