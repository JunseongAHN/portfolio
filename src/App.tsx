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
            Real-Time Perception · 3D Vision · Deployable AI Systems
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
            Applied AI engineer focused on autonomous perception, 3D vision, and
            deployable model runtimes.
          </p>

          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              margin: "0 0 18px",
            }}
          >
            M.S. Computer Science · 3+ years in production AI · 2 publications ·
            patent contributions in 3D/medical AI
          </p>

          <p style={{ margin: 0, fontSize: 16 }}>
            <a
              href="https://github.com/JunseongAHN"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            {" · "}
            <a
              href="https://www.linkedin.com/in/junseong-ahn"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
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
            description="Multimodal perception and autonomous scene understanding for maritime environments using radar, AIS, GPS, and vision."
            thumbnail={`${publicUrl}/Thumbnail/MaritimeAutonomousNavigation.png`}
            href="/MaritimeAutonomousNavigation"
          />

          <Card
            title="Automated 3D Facial Scan Alignment"
            description="Geometry-aware CT–facial scan registration using mesh processing, symmetry estimation, and 3D optimization."
            thumbnail={`${publicUrl}/Thumbnail/Registration3D.png`}
            href="/Registration3D"
          />

          <Card
            title="Browser-Based AI Runtime Optimization"
            description="Browser-side AI inference optimization comparing WebAssembly and WebGPU backends for real-time model execution."
            thumbnail={`${publicUrl}/Thumbnail/AIDeploymentOptimization.png`}
            href="/AIDeploymentOptimization"
          />
        </div>
      </section>

      <section style={{ marginTop: 72 }}>
        <h2>Publications & Patent Contributions</h2>

        <p style={{ color: "#555", lineHeight: 1.7, marginTop: 16 }}>
          Published work in dental AI and 3D vision, with contributions to
          registered Korean patents and international PCT filings in automated
          prosthesis generation, 3D scan alignment, and medical image
          registration.
        </p>

        <p style={{ color: "#555", lineHeight: 1.7 }}>
          Representative patent:{" "}
          <a
            href="https://doi.org/10.8080/1020240091252"
            target="_blank"
            rel="noreferrer"
          >
            Automated method for aligning scan data
          </a>
          .
        </p>

        <ul style={{ lineHeight: 1.8, marginTop: 16 }}>
          <li>
            Choi, J., <strong>Ahn, J.</strong>, and Park, J.-M. Deep
            learning-based automated detection of the dental crown finish line:
            An accuracy study, <em>Journal of Prosthetic Dentistry</em>, 2024{" "}
            <a
              href="https://doi.org/10.1016/j.prosdent.2023.11.018"
              target="_blank"
              rel="noreferrer"
            >
              Article
            </a>
            {" · "}
            <a href={`${publicUrl}/docs/publications/finish-line.bib`}>
              BibTeX
            </a>
            {" · "}
            <a href={`${publicUrl}/docs/publications/finish-line.pdf`}>PDF</a>
          </li>

          <li>
            Cho, J. H., Yi, Y., Choi, J., <strong>Ahn, J.</strong>, Yoon, H. I.,
            and Yilmaz, B. GAN-based dental design optimization,{" "}
            <em>Journal of Dentistry</em>, 2023{" "}
            <a
              href="https://doi.org/10.1016/j.jdent.2023.104739"
              target="_blank"
              rel="noreferrer"
            >
              Article
            </a>
            {" · "}
            <a href={`${publicUrl}/docs/publications/gan-dental-design.bib`}>
              BibTeX
            </a>
            {" · "}
            <a href={`${publicUrl}/docs/publications/gan-dental-design.pdf`}>
              PDF
            </a>
          </li>
        </ul>
      </section>
      <section style={{ marginTop: 72 }}>
        <h2>Service</h2>

        <p style={{ color: "#555", lineHeight: 1.7, marginTop: 16 }}>
          Full-time missionary service with The Church of Jesus Christ of
          Latter-day Saints, focused on communication, mentoring, community
          service, and cross-cultural collaboration.
        </p>
      </section>
    </main>
  );
}
