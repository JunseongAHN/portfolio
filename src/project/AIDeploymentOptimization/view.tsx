import HighlightBox from "../../components/HighlightBox";
import comparison from "./images/comparison.png";
import demoVideo from "./videos/demo.mp4";

export default function View() {
  return (
    <main style={pageStyle}>
      <a href="/">← Back</a>

      <section style={heroStyle}>
        <p style={eyebrowStyle}>
          Browser AI · Mobile Inference · ONNX Runtime Web · WebGPU/WASM
        </p>

        <h1 style={titleStyle}>AI Deployment Optimization</h1>

        <p style={subtitleStyle}>
          A browser-side inference project exploring how runtime backend choices
          affect real-time AI deployment performance across desktop and mobile
          environments.
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
        <h2>Why It Matters</h2>

        <p style={bodyStyle}>
          Real-world AI systems are limited not only by model accuracy, but also
          by where and how the model is deployed. This project evaluates
          practical browser inference backends under deployment constraints,
          including mobile browser execution, latency, and throughput.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>Runtime Comparison</h2>

        <p style={bodyStyle}>
          Benchmarked WebGPU and WebAssembly for neural network inference using
          ONNX Runtime Web, and compared WebAssembly with JavaScript for
          CPU-bound browser workloads.
        </p>

        <img
          src={comparison}
          alt="AI deployment runtime comparison"
          style={imageStyle}
        />
      </section>

      <HighlightBox>
        <h2>What I Built</h2>

        <ul style={listStyle}>
          <li>
            Built a browser-side image classification demo with ONNX Runtime Web
          </li>
          <li>Compared WASM and WebGPU backends for real-time inference</li>
          <li>Tested deployment behavior across desktop and mobile browsers</li>
          <li>
            Benchmarked JavaScript and WebAssembly for CPU-bound workloads
          </li>
        </ul>
      </HighlightBox>

      <section style={sectionStyle}>
        <h2>Key Takeaway</h2>

        <p style={bodyStyle}>
          Backend selection had a major impact on inference speed, showing that
          deployment optimization can be as important as model selection for
          real-time AI applications.
        </p>
      </section>

      <section style={{ ...sectionStyle, marginBottom: 80 }}>
        <h2>Links</h2>

        <p style={bodyStyle}>
          <a
            href="https://junseongahn.github.io/browser-ai-runtime/"
            target="_blank"
            rel="noreferrer"
          >
            Browser AI Runtime
          </a>
          {" · "}
          <a
            href="https://junseongahn.github.io/react-wasm-demo/"
            target="_blank"
            rel="noreferrer"
          >
            React WASM Demo
          </a>
        </p>
      </section>
    </main>
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
  maxWidth: 760,
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
