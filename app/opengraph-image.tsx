import { ImageResponse } from "next/og";

export const runtime     = "edge";
export const alt         = "Equity IB — Daily IB Rebates Up To $30 Per Lot";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050509",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(200,149,42,0.40) 0%, rgba(200,149,42,0.10) 45%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Bottom vignette */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 200,
            background: "linear-gradient(to top, rgba(5,5,9,0.8), transparent)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            position: "relative",
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(200,149,42,0.15)",
              border: "1px solid rgba(200,149,42,0.40)",
              borderRadius: 50,
              padding: "8px 24px",
            }}
          >
            <span
              style={{
                color: "#C8952A",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Introducing Broker Partner Program
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Earn Up To{" "}
            <span style={{ color: "#C8952A" }}>$30</span>
            {" "}Per Lot
          </div>

          {/* Sub-headline */}
          <div
            style={{
              fontSize: 26,
              color: "#94a3b8",
              maxWidth: 720,
              lineHeight: 1.4,
            }}
          >
            Daily IB Rebates · 6 Tier Levels · Dedicated Account Managers
          </div>

          {/* Domain */}
          <div
            style={{
              marginTop: 8,
              fontSize: 20,
              fontWeight: 700,
              color: "#C8952A",
              letterSpacing: "0.06em",
              opacity: 0.85,
            }}
          >
            equityib.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
