import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#071A2E",
          borderRadius: 6,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
          <circle cx="15" cy="15" r="13" stroke="#D4A84F" strokeWidth="1.5" />
          <path d="M4 18C9 15.5 12 14 15 14C18 14 21 15.5 26 18" stroke="#D4A84F" strokeWidth="1.5" />
          <circle cx="15" cy="10.5" r="2.2" fill="#D4A84F" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
