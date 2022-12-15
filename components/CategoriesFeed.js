export default function CategoriesFeed({ categories,cChanger }) {
  return categories ? categories.map((category) => <CategoryBar category={category} key={category} cChanger={cChanger} />) : null;
}

function CategoryBar({ category,cChanger }) {
  return (
    <div className="btn-logo">
      <button className="btn-logo" onClick={() => cChanger(category)}>{category}</button>
    </div>
  );
}