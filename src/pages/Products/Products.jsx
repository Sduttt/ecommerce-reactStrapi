import { useParams } from "react-router-dom"
import { ListProducts } from "../../components"
import useFetch from "../../hooks/useFetch"
import { useState } from "react"

const Products = () => {
  const catId = useParams().id

  const { data, loading, error } = useFetch(`categories?[filters][id][$eq]=${catId}`)

  const [isUsed, setIsUsed] = useState("any")
  const [sortMethod, SetSortMethod] = useState(null) // ltoh, htol

  const handleIsUsedChange = (event) => {
    setIsUsed(event.target.value);
  };
  const handleSortChange = (event) => {
    SetSortMethod(event.target.value);
  };


  return (
    <div className="flex justify-between gap-6 ">
      {/* LEFT */}
      <div className="ml-4 sticky top-4 h-[100%]">
        <div className="my-4">
          <h2 className="my-2 font-bold text-xl">Book Condition</h2>
          <div className="">
            <input type="radio" name="isUsed" id="any" value="any" defaultChecked onChange={handleIsUsedChange} />
            <label className="ml-1 text-base" htmlFor="any">New/Old</label>
          </div>
          <div className="">
            <input type="radio" name="isUsed" id="new" value="false" onChange={handleIsUsedChange} />
            <label className="ml-1 text-base" htmlFor="new">New</label>
          </div>
          <div className="">
            <input type="radio" name="isUsed" id="old" value="true" onChange={handleIsUsedChange} />
            <label className="ml-1 text-base" htmlFor="old">Old</label>
          </div>
        </div>
        {/* <div className="my-4">
          <h2 className="my-2 font-bold text-xl">Filter by Price</h2>
          <div className="">
            <span>0</span>
            <input type="range" name="" id="" min={0} max={10000} />
            <span>10,000</span>
          </div>
        </div> */}
        <div className="my-4">
          <h2 className="my-2 font-bold text-xl">Sort By</h2>
          <div className="">
            <div className="">
              <input type="radio" name="sort" id="ltoh" value="ltoh" onChange={handleSortChange} />
              <label className="ml-1 text-base" htmlFor="ltoh">Price (Low to High)</label>
            </div>
            <div className="">
              <input type="radio" name="sort" id="htol" value="htol" onChange={handleSortChange} />
              <label className="ml-1 text-base" htmlFor="htol">Price (High to Low)</label>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-[82%]" >
        <div className="relative">
          <img src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cover" className="w-[80vw] h-[40vh] object-cover" />
          <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
            <h1 className="text-accent text-3xl font-semibold capitalize">{error ? "Something went wrong" : (loading ? "Loading..." : data && data.data[0]?.attributes.title)}</h1>
            <p className="">{error ? "Something went wrong" : (loading ? "Loading..." : data && data.data[0]?.attributes.description)}</p>
          </div>
        </div>
        <div className="">
          <ListProducts isUsed={isUsed} sortMethod={sortMethod} />

        </div>
      </div>
    </div>
  )
}

export default Products