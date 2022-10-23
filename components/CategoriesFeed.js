export default function CategoriesFeed({ categories }) {
  return categories ? categories.map((category) => <CategoryBar category={category} key={category} />) : null;
}

function CategoryBar({ category }) {
  return (
    <div className="btn-logo">
        <button className="btn-logo">{category}</button>
    </div>
  );
}
