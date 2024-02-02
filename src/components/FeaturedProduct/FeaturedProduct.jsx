import FeatureCard from "./FeatureCard"

const FeaturedProduct = () => {
  return (
    // TODO: build featured products cards and finish this component
    <div>
        <div className="flex items-center">
            <h1 className="font-bold text-xl w-1/2 p-6">Featured Products</h1>
            <p className=" text-sm w-1/2 p-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nihil tenetur necessitatibus sapiente? Et reiciendis omnis ab ex deleniti expedita odit, in ipsa facilis debitis, quas qui, quibusdam hic enim. Officia necessitatibus vel velit qui!</p>
        </div>
        <div className="flex">
            <FeatureCard />
        </div>
    </div>
  )
}

export default FeaturedProduct