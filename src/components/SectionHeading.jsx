export default function SectionHeading({ id, label, title, children }) {
  return (
    <div className="section-heading">
      {label && <p className="eyebrow">{label}</p>}
      <h2 id={id}>{title}</h2>
      {children}
    </div>
  );
}
