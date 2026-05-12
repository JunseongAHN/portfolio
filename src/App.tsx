import Card from "./components/Card";

const publicUrl = process.env.PUBLIC_URL || "";

export default function App() {
  return (
    <main
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "56px 40px",
      }}
    >
      <section
        style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
          marginBottom: 72,
        }}
      >
        <img
          src={`${publicUrl}/images/profile.png`}
          alt="Junseong Ahn"
          style={{
            width: 132,
            height: 132,
            borderRadius: "50%",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />

        <div>
          <h1
            style={{
              fontSize: 48,
              lineHeight: 1.05,
              margin: "0 0 12px",
            }}
          >
            Junseong Ahn
          </h1>

          <p
            style={{
              fontSize: 20,
              margin: "0 0 18px",
              color: "#222",
            }}
          >
            Physical AI · Multimodal Perception · Deployable Systems
          </p>

          <p
            style={{
              maxWidth: 760,
              fontSize: 17,
              lineHeight: 1.7,
              color: "#444",
              margin: "0 0 18px",
            }}
          >
            Building real-world intelligent systems — from autonomous perception
            and geometry-aware 3D systems to deployable AI runtimes for
            production environments.
          </p>

          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              margin: "0 0 18px",
            }}
          >
            M.S. Computer Science · 3+ years in production AI · 10+ patents · 2
            publications
          </p>

          <p style={{ margin: 0, fontSize: 16 }}>
            <a href="https://github.com/JunseongAHN">GitHub</a>
            {" · "}
            <a href="https://www.linkedin.com/in/junseong-ahn">LinkedIn</a>
            {" · "}
            <a href={`${publicUrl}/docs/resume.pdf`}>Resume</a>
            {" · "}
            <a href={`${publicUrl}/docs/CV.pdf`}>CV</a>
          </p>
        </div>
      </section>

      <section>
        <h2
          style={{
            fontSize: 32,
            margin: "0 0 28px",
          }}
        >
          Selected Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
          }}
        >
          <Card
            title="Real-Time Maritime Autonomous Navigation"
            description="Real-time multimodal perception and autonomous scene understanding for dynamic maritime environments using radar, AIS, GPS, and vision."
            thumbnail={`${publicUrl}/Thumbnail/MaritimeAutonomousNavigation.png`}
            href={`${publicUrl}/MaritimeAutonomousNavigation`}
          />

          <Card
            title="Automated 3D Facial Scan Alignment"
            description="Geometry-based registration initialization system for CT–facial scan alignment using mesh processing, symmetry estimation, and 3D optimization."
            thumbnail={`${publicUrl}/Thumbnail/Registration3D.png`}
            href={`${publicUrl}/Registration3D`}
          />

          <Card
            title="AI Deployment Optimization"
            description="Browser-side AI inference optimization comparing WebAssembly and WebGPU backends for real-time, deployable model execution."
            thumbnail={`${publicUrl}/Thumbnail/AIDeploymentOptimization.png`}
            href={`${publicUrl}/AIDeploymentOptimization`}
          />
        </div>
      </section>
    </main>
  );
}
