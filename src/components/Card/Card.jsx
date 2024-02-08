/* eslint-disable react/prop-types */

const Card = ({ product }) => {
    return (
        <div className="card w-64 bg-base-200 shadow-xl m-2 ">
            <figure className="w-64 h-64"><img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + product?.attributes.img1.data.attributes.url} alt={product?.attributes.title} /></figure>
            <div className="card-body">
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
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card