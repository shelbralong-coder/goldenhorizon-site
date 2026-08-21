import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#071A2E",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="40" height="40" viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="13" stroke="#D4A84F" strokeWidth="1.2" />
            <path d="M4 18C9 15.5 12 14 15 14C18 14 21 15.5 26 18" stroke="#D4A84F" strokeWidth="1.2" />
            <circle cx="15" cy="10.5" r="2" fill="#D4A84F" />
          </svg>
          <span style={{ color: "#D4A84F", fontSize: 22, letterSpacing: 4, textTransform: "uppercase" }}>
            Golden Horizon
          </span>
        </div>
        <div style={{ display: "flex", color: "#FFFFFF", fontSize: 58, marginTop: 40, maxWidth: 900, lineHeight: 1.15 }}>
          Asset Recovery &amp; Claim Research
        </div>
        <div style={{ display: "flex", color: "rgba(255,255,255,0.65)", fontSize: 26, marginTop: 24, maxWidth: 800 }}>
          Researching potential unclaimed and surplus funds on behalf of individuals, families, heirs, and businesses.
        </div>
      </div>
    ),
    { ...size }
  );
}
