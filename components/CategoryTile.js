//CategoryTile
export default function CategoryTile({ category }) {
    return (
        <div>
            {/* individual category */}
            <button className="btn-logo">{category}</button>
        </div>
    );
}
