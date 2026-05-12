import type { ReactNode } from "react";

export default function HighlightBox({ children }: { children: ReactNode }) {
  return <section style={highlightStyle}>{children}</section>;
}

const highlightStyle: React.CSSProperties = {
  marginTop: 52,
  padding: 24,
  borderRadius: 16,
  background: "#f7f7f7",
  border: "1px solid #ddd",
};
