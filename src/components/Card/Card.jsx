/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const Card = ({ product }) => {

    const percentageOff = ((product.attributes.mrp - product.attributes.price) / product.attributes.mrp) * 100;
    return (
        <Link to={`/product/${product.id}`} className="card w-56 bg-blue-200 shadow-xl m-2 relative overflow-hidden">

                <div className="absolute top-0 right-[25px] rounded-bl-md transform translate-x-1/2  bg-gradient-to-r from-pink-600 to-blue-600  text-white text-xs font-bold py-1 px-4">
                    {percentageOff.toFixed(0)}% off
                </div>
            {product?.attributes.type === "featured," ?
                <div className="absolute left-[-5px] top-[-5px]">
                    <div
                        className="absolute transform -rotate-45 bg-emerald-600 text-center text-white font-semibold glass left-[-20px] top-[28px] w-[120px]">
                        Featured
                    </div>
                </div>
                : null}
            <figure className="w-56 h-56 object-fit overflow-hidden rounded-t-xl"><img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + product?.attributes.img1.data.attributes.url} alt={product?.attributes.title} /></figure>
            <div className="card-body p-3">
                <div className="flex items-center">
                    <h2 className="card-title capitalize">{product?.attributes.title}</h2>{product?.attributes.isUsed ? <div className="badge badge-accent mx-4">Used</div> : <div className="badge badge-secondary mx-4">New</div>}
                </div>
                <p className="capitalize text-gray-700 text-sm">{product?.attributes.description.length > 25 ? product?.attributes.description.substring(0, 25).concat("...") : product?.attributes.description}</p>

                <div className="flex justify-between">
                    <div className="flex flex-col text-xl">
                        <div className="line-through text-gray-700">{product?.attributes.mrp} Rs.</div>
                        <div className="font-semibold">{product?.attributes.price} Rs.</div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-primary">Order now</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card