import { useState } from "react";

export default function CategoriesFeed({ categories }) {
  return categories ? categories.map((category) => <CategoryBar category={category} key={category} />) : null;
}

function CategoryBar({ category }) {

  const [selectedCategory,setCategory] = useState("Hackathon");
  
  return (
    <div className="btn-logo">
        <button className="btn-logo" onClick={()=>{setCategory(category)}}>{category}</button>
    </div>
  );
}