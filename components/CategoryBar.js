import { useContext, useState } from 'react';
import { UserContext } from '@lib/context';
import Loader from "@components/Loader";
import CategoriesFeed from "@components/CategoriesFeed";
let categories = ["Hackathon","OpenSource","Internships","Scholarships","College Applications"];

//CategoryBar
export default function CategoryBar() {
  const {username}  = useContext(UserContext);
  
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
