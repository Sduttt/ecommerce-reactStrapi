import { useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cartReducer"
import toast from 'react-hot-toast';
import { Toaster } from "../../components"

const Product = () => {

  const productId = useParams().id

  const dispatch = useDispatch()

  const { data } = useFetch(`http://localhost:1337/api/products?populate=*&[filters][id][$eq]=${productId}`)

  const product = data && data.data[0]?.attributes;

  const percentageOff = ((product?.mrp - product?.price) / product?.mrp) * 100;

  const notify = () => toast.success('Product added to the cart.');

  const images = [
    import.meta.env.VITE_REACT_APP_UPLOAD_URL + product?.img1.data.attributes.url,
    import.meta.env.VITE_REACT_APP_UPLOAD_URL + product?.img2.data.attributes.url
  ]

  let languageName = '';

  switch (product?.language) {
    case 'ben,':
      languageName = 'Bengali';
      break;
    case 'eng,':
      languageName = 'English';
      break;
    case 'hin,':
      languageName = 'Hindi';
      break;
    case 'oth,':
      languageName = 'Others';
      break;
    default:
      languageName = 'Others';
  }

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (product === undefined) {
    return (
      <div className="flex items-center justify-center min-h-[79vh]">
        <h1 className="text-4xl font-semibold">Product not found</h1>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col md:flex-row items-center my-2 ml-[-50px] md:ml-2 md:min-h-[79vh]">
        {/* LEFT */}
        <div className="flex md:gap-8 bg-slate-200">
          {/* images */}
          <div>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="product"
                className="w-16 h-16 object-cover cursor-pointer hover:opacity-50 transition duration-300 ease-in-out my-4 mr-8 md:m-4 border-spacing-2 border-black"
                onClick={() => setSelectedImg(index)}
              />
            ))}
          </div>
          <div className="">
            <img src={images[selectedImg]} alt="" className="my-4 w-64 h-64 md:w-96 md:h-96 object-cover mx-[-20px]" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="max-w-[90vw] md:max-w-[500px] m-4 ml-16 md:ml-24 text-xs">
          <h1 className="text-md sm:text-2xl font-semibold capitalize ">{product?.title}

            {product?.type === "featured," ? <span className="badge badge-sm md:badge-md badge-warning text-white mx-4">Featured</span> : ""}
          </h1>

          <p className="text-gray-700 md:text-base font-bold">Language: <span className="font-normal capitalize"> {languageName} </span></p>
          <p className="text-gray-700 md:text-base font-bold">Category: <span className="font-normal capitalize"> {product?.categories.data?.map(category => category.attributes.title).join(', ')} </span></p>
          <p className="text-gray-700 md:text-base font-bold">Book Condition: <span className="font-normal capitalize"> {product?.isUsed ? "Used" : "New"} </span></p>
          <p className="md:text-lg my-4">{product?.description}</p>
          <p className="line-through font-medium sm:text-sm text-gray-500">Rs. {product?.mrp}</p>
          <p className="font-semibold text-md sm:text-xl">Rs. {product?.price}<span className="text-green-500 ml-2">{percentageOff.toFixed(2)}% off</span></p>
          <div className="flex items-center">
            <h2 className="font-semibold sm:text-base">Quantity:  </h2>
            <button className={`btn  m-2 ${quantity <= 1 ? "btn-disabled" : ""}`} onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
            <span className="font-semibold sm:text-base">{quantity}</span>
            <button className="btn m-2" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <div className="flex ">
            <button className="btn btn-info mx-2" onClick={() => {
              dispatch(addToCart({
                id: productId,
                title: product?.title,
                price: product?.price,
                quantity,
                img: images[0]

              }));
              notify();
            }} >Add to Cart</button>
            <button className="btn btn-outline btn-info mx-2">Add to wishlist</button>
          </div>
        </div>
        <Toaster />
      </div>

    )
  }



}

export default Product