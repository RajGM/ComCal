const categoriesAndFilters = {
  "Hackathon": ["Onsite", "Remote", "Hybrid"],
  "OpenSource": ["MLH", "LFX", "Google Summer of Code", "Hacktoberfest", "GSoD"],
  "Internship": ["SWE", "PM", "UI/UX"],
  "Collge Applications": ["Fall", "Spring", "Summer"]
  , "Scholarships": ["Research", "Fee waiver", "RAship"]
}

export default function FilterFeed({ selectedCategory }) {

  let filters = categoriesAndFilters[selectedCategory];
  return filters ? filters.map((filter) => <FilterBar filter={filter} key={filter} />) : null;
}

function FilterBar({ filter }) {
  return (
    <div className="btn-logo">
      <button className="btn-logo">{filter}</button>
    </div>
  );
}
