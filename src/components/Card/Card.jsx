/* eslint-disable react/prop-types */

const Card = ({ img, title, desc, pricex, price }) => {
    return (
        <div className="card w-64 bg-base-100 shadow-xl m-2">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="flex justify-between">
                    <div className="flex flex-col text-xl">
                        <div className="line-through text-gray-700">{pricex} Rs.</div>
                        <div className="font-semibold">{price} Rs.</div>
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