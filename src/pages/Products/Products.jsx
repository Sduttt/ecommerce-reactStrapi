import { useParams } from "react-router-dom"
import { Card } from "../../components"
import useFetch from "../../hooks/useFetch"

const Products = () => {
  const catId = useParams().id
  // console.log(catId)

  const { data, loading, error } = useFetch(`/categories?[filters][id][$eq]=${catId}`)


  return (
    <div className="flex justify-between gap-6 ">
      {/* LEFT */}
      <div className="ml-4 sticky top-4 h-[100%]">
        <div className="my-4">
          <h2 className="my-2 font-bold text-xl">Book Condition</h2>
          <div className="">
            <input type="checkbox" name="New" id="new" value="new" />
            <label className="ml-1 text-base" htmlFor="new">New</label>
          </div>
          <div className="">
            <input type="checkbox" name="Old" id="old" value="old" />
            <label className="ml-1 text-base" htmlFor="old">Old</label>
          </div>
        </div>
        <div className="my-4">
          <h2 className="my-2 font-bold text-xl">Filter by Price</h2>
          <div className="">
            <span>0</span>
            <input type="range" name="" id="" min={0} max={10000} />
            <span>10,000</span>
          </div>
        </div>
        <div className="my-4">
          <h2 className="my-2 font-bold text-xl">Sort By</h2>
          <div className="">
            <div className="">
              <input type="radio" name="sort" id="ltoh" value="ltoh" />
              <label className="ml-1 text-base" htmlFor="ltoh">Price (Low to High)</label>
            </div>
            <div className="">
              <input type="radio" name="sort" id="htol" value="htol" />
              <label className="ml-1 text-base" htmlFor="htol">Price (High to Low)</label>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-[82%]" >
        <div className="relative">
          <img src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cover" className="w-[80vw] h-[40vh] object-cover" />
          <h1 className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-accent text-3xl font-semibold capitalize">{error ? "" : (loading ? " " : data[0]?.attributes.title)}</h1>
        </div>
        <div className="my-2 flex flex-wrap">
          <Card title="Sapiens" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis architecto quia et!" pricex={399} price={349} img="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
          <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
        </div>
      </div>
    </div>
  )
}

export default Products