import { useContext } from 'react';
import { catogriesContext } from '@lib/context';
import Loader from "@components/Loader";
import FilterFeed from "@components/FilterFeed";

//CategoryBar
export default function FilterBar() {
  const { selectedCategory, username } = useContext(catogriesContext);
  
  return (
    <nav className="categoryBar">
      <ul>
        <li>
          <div className="label">Filters</div>
        </li>

        <li>
          <div className='space'></div>
        </li>

        {!username && (
          <ul>
            <li><Loader show={true} /></li>
          </ul>
        )}

        {/* categories are fetched */}
        <FilterFeed selectedCategory={"Scholarships"}/>

      </ul>
    </nav>
  );
}