import { useContext } from 'react';
import { catogriesContext } from '@lib/context';
import Loader from "@components/Loader";
import CategoriesFeed from "@components/CategoriesFeed";
import getCategories from "@lib/firebase";

//CategoryBar
export default function CategoryBar() {
  const { selectedCategory, username } = useContext(catogriesContext);
  let categories = ["Hackathon","OpenSource","Internships","Scholarships","College Applications"];
  
  return (
    <nav className="categoryBar">
      <ul>
        <li>
          <button className="btn-logo cate-btn">Categories</button>
        </li>

        {/* categories are not being fetched */}
        {!username && (
          <ul>
            <li><Loader show={true} /></li>
          </ul>
        )}

        {/* categories are fetched */}
          <CategoriesFeed categories={categories} />
        
      </ul>
    </nav>
  );
}
