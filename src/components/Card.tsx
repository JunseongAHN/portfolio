interface CardProps {
  title: string;
  description: string;
  thumbnail?: string;
  href: string;
}
 
export default function Card({ title, description, thumbnail, href }: CardProps) {
  return (
    <div>
      {thumbnail && <img src={thumbnail} alt={title} width={300} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href}>View project →</a>
    </div>
  );
}
 