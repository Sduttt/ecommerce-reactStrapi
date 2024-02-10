/* eslint-disable react/prop-types */
import useFetch from "../../hooks/useFetch"
import Card from "../Card/Card"

const FeaturedProduct = ({ type }) => {

  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type},`)


  return (
    <div>
      <div className="flex items-center">
        <h1 className="font-bold text-xl w-1/2 p-6">Featured Products</h1>
        <p className=" text-sm w-1/2 p-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nihil tenetur necessitatibus sapiente? Et reiciendis omnis ab ex deleniti expedita odit, in ipsa facilis debitis, quas qui, quibusdam hic enim. Officia necessitatibus vel velit qui!</p>
      </div>
      <div className="flex justify-center mb-12"> 
        {error ? "Something went wrong!!" : (loading ? "Loading..." : data?.data.map((product) => {
          return <Card key={product.id} product={product} />
        }))
        } 
      </div>
    </div>
  )
}

export default FeaturedProduct