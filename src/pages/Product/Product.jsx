import { useState } from "react"

const Product = () => {

  const images = [
    "https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8523150/pexels-photo-8523150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex items-center min-h-[79vh]">
      {/* LEFT */}
      <div className="flex gap-8">
        {/* images */}
        <div className="">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="product"
              className="w-20 h-20 object-cover cursor-pointer hover:opacity-50 transition duration-300 ease-in-out m-4"
              onClick={() => setSelectedImg(index)}
            />
          ))}
        </div>
        <div className="">
          <img src={images[selectedImg]} alt="" className="my-4 w-96 h-96 object-cover mx-[-20px]" />
        </div>

      </div>

      {/* RIGHT */}
      <div className="max-w-[500px] m-4 ml-24">
        <h1 className="text-xl font-semibold">Product Name</h1>
        <p className="text-lg my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eius doloremque iure impedit possimus maxime nam accusamus deserunt reiciendis expedita.</p>
        <p className="text-bg font-semibold my-4">Rs. <span className="line-through font-medium text-gray-500">399</span> 340</p>
        <div className="flex items-center">
          <h2 className="font-semibold text-bg">Quantity:  </h2>
          <button className={`btn m-2 ${quantity <= 1 ? "btn-disabled" : ""}`} onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
          <span className="font-semibold text-bg">{quantity}</span>
          <button className="btn m-2" onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <div className="flex ">
          <button className="btn btn-info mx-2">Add to Cart</button>
          <button className="btn btn-outline btn-info mx-2">Add to wishlist</button>
        </div>
      </div>

    </div>

  )
}

export default Product