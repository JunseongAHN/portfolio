import { Link } from "react-router-dom";
import HighlightBox from "../../components/HighlightBox";
import comparison from "./images/comparison.png";
import demoVideo from "./videos/demo.mp4";

export default function View() {
  return (
    <main style={pageStyle}>
      <Link to="/">← Back</Link>

      <section style={heroStyle}>
        <p style={eyebrowStyle}>
          Browser AI · Mobile Inference · ONNX Runtime Web · WebGPU/WASM
        </p>

        <h1 style={titleStyle}>Browser-Based AI Runtime Optimization</h1>

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
          Benchmarked ONNX Runtime Web inference across WebAssembly and WebGPU
          backends on desktop and tablet environments. WebGPU showed
          approximately 6× higher throughput on desktop and 1.67× higher
          throughput on tablet, while results varied by hardware, browser
          support, and thermal constraints.
        </p>

        <div style={tableWrapStyle}>
          <h3>Desktop</h3>
          <p style={noteStyle}>Intel Pentium Gold G5400 + NVIDIA GTX 750 Ti</p>

          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Backend</th>
                <th style={thStyle}>FPS</th>
                <th style={thStyle}>Avg Latency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>WASM</td>
                <td style={tdStyle}>~16</td>
                <td style={tdStyle}>~63 ms</td>
              </tr>
              <tr>
                <td style={tdStyle}>WebGPU</td>
                <td style={tdStyle}>~99</td>
                <td style={tdStyle}>~10 ms</td>
              </tr>
            </tbody>
          </table>

          <p style={resultStyle}>
            Result: WebGPU achieved approximately 6× higher throughput than
            WASM.
          </p>
        </div>

        <div style={tableWrapStyle}>
          <h3>Tablet</h3>
          <p style={noteStyle}>Lenovo Tab M11</p>

          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Backend</th>
                <th style={thStyle}>FPS</th>
                <th style={thStyle}>Avg Latency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>WASM</td>
                <td style={tdStyle}>~7</td>
                <td style={tdStyle}>~133 ms</td>
              </tr>
              <tr>
                <td style={tdStyle}>WebGPU</td>
                <td style={tdStyle}>~12</td>
                <td style={tdStyle}>~80 ms</td>
              </tr>
            </tbody>
          </table>

          <p style={resultStyle}>
            Result: WebGPU achieved approximately 1.67× higher throughput than
            WASM.
          </p>
        </div>

        <p style={noteStyle}>
          Performance depends on browser, hardware, thermal limits, and WebGPU
          support.
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
            Measured FPS and latency differences under practical browser
            constraints
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
  color: "#070606",
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

const tableWrapStyle: React.CSSProperties = {
  marginTop: 28,
  maxWidth: 760,
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: 10,
  fontSize: 16,
};

const thStyle: React.CSSProperties = {
  textAlign: "left",
  borderBottom: "1px solid #ddd",
  padding: "10px 8px",
};

const tdStyle: React.CSSProperties = {
  borderBottom: "1px solid #eee",
  padding: "10px 8px",
};

const noteStyle: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.6,
  color: "#666",
  maxWidth: 820,
};

const resultStyle: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.6,
  color: "#333",
  fontWeight: 600,
  marginTop: 12,
};
