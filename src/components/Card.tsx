import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  description: string;
  thumbnail: string;
  href: string;
};

export default function Card({
  title,
  description,
  thumbnail,
  href,
}: CardProps) {
  return (
    <Link
      to={href}
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        border: "1px solid #ddd",
        borderRadius: 16,
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <img
        src={thumbnail}
        alt={title}
        style={{
          width: "100%",
          height: 220,
          objectFit: "cover",
          display: "block",
          background: "#f6f6f6",
        }}
      />

      <div style={{ padding: 20 }}>
        <h3 style={{ margin: "0 0 8px", fontSize: 22 }}>{title}</h3>
        <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </Link>
  );
}
