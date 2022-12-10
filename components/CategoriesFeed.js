export default function CategoriesFeed({ categories,cChanger }) {
  return categories ? categories.map((category) => <CategoryBar category={category} key={category} cChanger={cChanger} />) : null;
}

function CategoryBar({ category,cChanger }) {
  
  function selectCategory(category) {

    console.log("Selected Category:",category);
    cChanger(category);
    console.log("Later Category:",category);
  }

  return (
    <div className="btn-logo">
      <button className="btn-logo" onClick={() => { selectCategory(category) }}>{category}</button>
    </div>
  );
}