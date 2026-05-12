import diagram from "./images/diagram.png";
import perception from "./images/perception.png";
import navigation from "./images/navigation.png";

import demoVideo from "./videos/demo.mp4";
import HighlightBox from "../../components/HighlightBox";

export default function View() {
  return (
    <main style={pageStyle}>
      <a href="/">← Back</a>

      <section style={heroStyle}>
        <p style={eyebrowStyle}>Navier Boat · Autonomous Systems</p>

        <h1 style={titleStyle}>Real-Time Maritime Autonomous Navigation</h1>

        <p style={subtitleStyle}>
          A real-time multimodal autonomy system for dynamic maritime
          environments, integrating radar, AIS, GPS, vision, and vessel
          telemetry for robust navigation.
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
        <h2>Core System</h2>

        <p style={bodyStyle}>
          The system connects multimodal sensing, scene understanding, and
          navigation/control into a real-time closed-loop autonomy stack.
        </p>

        <img
          src={diagram}
          alt="Real-time maritime autonomy stack architecture"
          style={imageStyle}
        />
      </section>

      <HighlightBox>
        <h2>What I Built</h2>

        <ul style={listStyle}>
          <li>
            Developed multimodal perception pipelines for maritime environments
          </li>

          <li>
            Integrated radar, AIS, GPS, vision, and vessel telemetry signals
          </li>

          <li>
            Built scene understanding logic for dynamic obstacle awareness and
            vessel tracking
          </li>

          <li>
            Contributed to real-time autonomy integration under onboard
            deployment constraints
          </li>
        </ul>
      </HighlightBox>

      <section style={sectionStyle}>
        <h2>System Evidence</h2>

        <p style={bodyStyle}>
          Internal development views used to validate perception, vessel states,
          obstacle context, and navigation behavior in real-world maritime
          scenes.
        </p>

        <div style={evidenceGridStyle}>
          <Figure
            image={perception}
            title="Perception Debug View"
            caption="Camera-based vessel detection and confidence visualization."
          />

          <Figure
            image={navigation}
            title="Navigation Map View"
            caption="Local map with vessel states, obstacle context, and planning signals."
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Why It’s Interesting</h2>

        <p style={bodyStyle}>
          Unlike structured road environments, maritime scenes contain sparse
          landmarks, dynamic obstacles, uncertain motion, noisy sensing, and
          real-time onboard constraints.
        </p>
      </section>

      <section style={{ ...sectionStyle, marginBottom: 80 }}>
        <p style={ndaStyle}>
          Due to NDA restrictions, some implementation details and real-world
          scenarios are omitted.
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

      <div style={figureBodyStyle}>
        <h3 style={figureTitleStyle}>{title}</h3>
        <p style={captionStyle}>{caption}</p>
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
  maxWidth: 820,
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  marginTop: 20,
  borderRadius: 16,
  border: "1px solid #ddd",
};

const listStyle: React.CSSProperties = {
  fontSize: 17,
  lineHeight: 1.8,
  paddingLeft: 20,
  maxWidth: 860,
};

const evidenceGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 18,
  marginTop: 18,
};

const figureStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  borderRadius: 14,
  overflow: "hidden",
  background: "#fff",
};

const figureImageStyle: React.CSSProperties = {
  width: "100%",
  height: 190,
  objectFit: "cover",
  display: "block",
  background: "#f7f7f7",
};

const figureBodyStyle: React.CSSProperties = {
  padding: 14,
};

const figureTitleStyle: React.CSSProperties = {
  fontSize: 16,
  margin: "0 0 6px",
};

const captionStyle: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.5,
  color: "#555",
  margin: 0,
};

const ndaStyle: React.CSSProperties = {
  color: "#666",
  fontSize: 15,
  fontStyle: "italic",
};
