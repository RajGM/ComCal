import { useAtom } from 'jotai';
import { filterAtom } from './atoms';

const categoriesAndFilters = {
  "Hackathon": ["Onsite", "Remote", "Hybrid"],
  "OpenSource": ["MLH", "LFX", "GSoC", "Hacktoberfest", "GSoD"],
  "Internship": ["SWE", "PM", "UI/UX"],
  "College Applications": ["Fall", "Spring", "Summer"]
  , "Scholarships": ["Research", "Fee waiver", "RAship"]
}

let filters = categoriesAndFilters["Hackathon"];
let sc = "";

export default function FilterFeed({ selectedCategory }) {
  filters = categoriesAndFilters[selectedCategory];
  sc = selectedCategory;
  return filters ? filters.map((filter) => <FilterBar filter={filter} key={filter} />) : null;
}

function FilterBar({ filter }) {
  const [, updateFilterAtom] = useAtom(filterAtom);

  function testFun() {
    updateFilterAtom(filter.toLowerCase());
  }

  return (
    <div className="btn-logo">
      <button className="btn-logo" onClick={testFun} >{filter}</button>
    </div>
  );
}
