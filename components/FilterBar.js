import { useContext } from 'react';
import { catogriesContext } from '@lib/context';
import Loader from "@components/Loader";
import FilterFeed from "@components/FilterFeed";

//CategoryBar
export default function FilterBar() {
  const { selectedCategory, username } = useContext(catogriesContext);
  let filters = ["Onsite","Remote","Hybrid"];
  
  return (
    <nav className="categoryBar">
      <ul>
        <li>
          <button className="btn-logo">Filter</button>
        </li>

        {/* categories are not being fetched */}
        {!username && (
          <ul>
            <li><Loader show={true} /></li>
          </ul>
        )}

        {/* categories are fetched */}
          <FilterFeed filters={filters} />
        
      </ul>
    </nav>
  );
}