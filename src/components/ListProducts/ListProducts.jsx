/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Card from "../Card/Card"

const ListProducts = ({ isUsed }) => {
  const catId = useParams().id

  const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id]=${catId}&${isUsed == "any" ? "" : isUsed == 'false' ? "[filters][isUsed][$eq]=false" : "[filters][isUsed][$eq]=true"}`)
  const products = data?.data

  if (products?.length > 0) {
    return (
      <div className="my-2 flex flex-wrap" >

        {error ? "Something went wrong" : loading ? "Loading..." : products?.map(product => <Card key={product.id} product={product} />)}
      </div>
    )
  } else {
    return (
      <div className="my-4 h-56">
        <h2 className="text-2xl font-bold text-center">Sorry! No Products Found in this category...</h2>
      </div>
    )
  }


}

export default ListProducts