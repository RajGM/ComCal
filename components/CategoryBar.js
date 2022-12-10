import { useState } from 'react';
import CategoriesFeed from "@components/CategoriesFeed";
let categories = ["Hackathon", "OpenSource", "Internship", "Scholarships", "College Applications"];
import FilterBar from "@components/FilterBar";

//CategoryBar
export default function CategoryBar() {
  const[stateC, setCState]=useState('Hackathon');

  console.log("stateC:",stateC);
  return (
    <div className='middle'>
      <div className='childDiv'>
        <nav className="categoryBar">
          <ul>
            <li>
              <div className="label">Categories</div>
            </li>

            <li>
              <div className='space'></div>
            </li>

            {/* categories are fetched */}
            <CategoriesFeed categories={categories} cChanger={setCState} />

          </ul>
        </nav>
      </div>

      <div className='childDiv'>
        <FilterBar selectedC={stateC}/>
      </div>

    </div>

  );
}
