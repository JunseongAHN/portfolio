import demoVideo from "./videos/demo.mp4";

import symmetricPlane from "./images/symmetricPlane.png";
import result from "./images/result.jpg";
import HighlightBox from "../../components/HighlightBox";

export default function View() {
  return (
    <main style={pageStyle}>
      <a href="/">← Back</a>

      <section style={heroStyle}>
        <p style={eyebrowStyle}>Imagoworks · 3D Vision · Registered Patent</p>

        <h1 style={titleStyle}>Automated 3D Facial Scan Alignment</h1>

        <p style={subtitleStyle}>
          A geometry-based system that automatically estimates facial
          orientation from 3D scan meshes and uses it as a robust initialization
          for CT–facial scan registration.
        </p>

        <video
          src={demoVideo}
          autoPlay
          controls
          muted
          loop
          playsInline
          style={videoStyle}
        />
      </section>

      <section style={sectionStyle}>
        <h2>Why This Matters</h2>
        <p style={bodyStyle}>
          CT volumes and facial scans often come from different coordinate
          systems. Without a reliable initial alignment, fine registration can
          become unstable or require manual correction.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>Core Idea</h2>

        <div style={figureGridStyle}>
          <Figure
            image={symmetricPlane}
            title="Estimate Face Geometry"
            caption="Infer facial axes and a symmetry plane directly from 3D mesh geometry."
          />

          <Figure
            image={result}
            title="Initialize CT Registration"
            caption="Use the estimated orientation to make CT–scan registration more stable."
          />
        </div>
      </section>

      <HighlightBox>
        <h2>What I Built</h2>

        <ul style={listStyle}>
          <li>Designed the geometry-based orientation estimation pipeline</li>
          <li>
            Implemented mesh processing and curvature-aware feature extraction
          </li>
          <li>Developed symmetry plane optimization for noisy facial scans</li>
          <li>
            Integrated automated alignment into the CT–scan registration
            workflow
          </li>
          <li>Contributed to registered production patent KR 10-2862435</li>
        </ul>
      </HighlightBox>

      <section style={{ ...sectionStyle, marginBottom: 80 }}>
        <h2>Technical Stack</h2>

        <p style={bodyStyle}>
          C++ · Python · 3D Geometry · Mesh Processing · Optimization · Medical
          Imaging · ICP Registration Initialization
        </p>
      </section>
    </main>
  );
}

function Figure({
  image,
  title,
  caption,
}: {
  image: string;
  title: string;
  caption: string;
}) {
  return (
    <article style={figureStyle}>
      <img src={image} alt={title} style={figureImageStyle} />

      <div style={{ padding: 18 }}>
        <h3 style={{ margin: "0 0 8px" }}>{title}</h3>
        <p style={{ margin: 0, color: "#555", lineHeight: 1.5 }}>{caption}</p>
      </div>
    </article>
  );
}

const pageStyle: React.CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "32px 24px",
};

const heroStyle: React.CSSProperties = {
  marginTop: 36,
};

const eyebrowStyle: React.CSSProperties = {
  color: "#666",
  marginBottom: 8,
};

const titleStyle: React.CSSProperties = {
  fontSize: 44,
  lineHeight: 1.05,
  margin: "0 0 14px",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: 19,
  lineHeight: 1.6,
  color: "#333",
  maxWidth: 820,
  margin: 0,
};

const videoStyle: React.CSSProperties = {
  width: "100%",
  marginTop: 28,
  borderRadius: 16,
  border: "1px solid #ddd",
};

const sectionStyle: React.CSSProperties = {
  marginTop: 52,
};

const bodyStyle: React.CSSProperties = {
  fontSize: 17,
  lineHeight: 1.7,
  color: "#444",
  maxWidth: 850,
};

const figureGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 22,
  marginTop: 20,
};

const figureStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  borderRadius: 16,
  overflow: "hidden",
  background: "#fff",
};

const figureImageStyle: React.CSSProperties = {
  width: "100%",
  display: "block",
  background: "#f7f7f7",
};

const listStyle: React.CSSProperties = {
  fontSize: 17,
  lineHeight: 1.8,
  marginBottom: 0,
};
