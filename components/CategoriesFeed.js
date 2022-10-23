import CategoryTile from "./CategoryTile";

export default function CategoriesFeed({ categories }) {
  return categories ? categories.map((category) => <CategoryBar category={category} key={category} />) : null;
}

function CategoryBar({ category }) {
  return (
    <div className="btn-logo">
        <CategoryTile category={category} />
    </div>
  );
}
