export default function FilterFeed({ filters }) {
  return filters ? filters.map((filter) => <FilterBar filter={filter} key={filter} />) : null;
}

function FilterBar({ filter }) {
  return (
    <div className="btn-logo">
        <button className="btn-logo">{filter}</button>
    </div>
  );
}
