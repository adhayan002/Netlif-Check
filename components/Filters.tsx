export default function Filters() {
  const filters = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  return (
    <aside className="filters">
      <label className="customizable">
        <input type="checkbox" />
        CUSTOMIZABLE
      </label>

      {filters.map((f) => (
        <div key={f} className="filter-item">
          <span>{f}</span>
          <span>▾</span>
        </div>
      ))}
    </aside>
  );
}
