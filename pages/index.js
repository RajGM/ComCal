import CategoryBar from "@components/CategoryBar"
import FilterBar from "@components/FilterBar";

const Home = () => {
  return (
    <div className="middle">
      <div className="childDiv">
      <CategoryBar />
      </div>
      <div className="childDiv">
      <FilterBar/>
      </div>
    </div>
  )
}

export default Home
