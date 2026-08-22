import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Electrician Auto Cluj";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.jpg"));
  const logoSrc = `data:image/jpeg;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "80px",
          backgroundColor: "#111111",
        }}
      >
        <img
          src={logoSrc}
          width={200}
          height={200}
          style={{
            borderRadius: "100%",
            border: "6px solid #f5c542",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 56,
          }}
        >
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, color: "#ffffff" }}>
            Electrician Auto
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 600, color: "#f5c542", marginTop: 4 }}>
            Cluj-Napoca
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a3a3a3", marginTop: 24 }}>
            Diagnoză și reparații electrice auto
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
