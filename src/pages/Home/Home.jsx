import { Slider, FeaturedProduct, Categories } from "../../components"

const Home = () => {
  return (
    <div>
      <div className="">
        <Slider />
        <FeaturedProduct />
        <Categories />
      </div>
    </div>
  )
}

export default Home