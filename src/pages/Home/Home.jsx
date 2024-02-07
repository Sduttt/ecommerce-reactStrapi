import { Slider, FeaturedProduct, Categories } from "../../components"

const Home = () => {
  return (
    <div>
      <div className="">
        <Slider />
        <FeaturedProduct type={"featured"} />
        <Categories />
      </div>
    </div>
  )
}

export default Home