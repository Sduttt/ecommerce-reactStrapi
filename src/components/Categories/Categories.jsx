import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <div id="cat" className="flex gap-1 h-[80vh] m-2">
      <div className="flex flex-col flex-2 gap-1">
        <div className="gap-1 fex  relative overflow-hidden">
          <img src="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="category" className="w-[100%] h-[100%] object-cover" />
          <Link to="/products/2" className="absolute min-w-[100px] bg-white border-none w-fit h-[40px] rounded-sm p-1 top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center">
             Classical
          </Link>
        </div>
        <div className="gap-1 fex  relative overflow-hidden">
          <img src="https://images.pexels.com/photos/2662180/pexels-photo-2662180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="category" className="w-[100%] h-[100%] object-cover" />
          <Link to="/products/3" className="absolute min-w-[100px] bg-white border-none w-fit h-[40px] rounded-sm p-1 top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center">
             Horror
          </Link>
        </div>
      </div>
      <div className="flex ">
        <div className="gap-1 fex relative overflow-hidden">
          <img src="https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg" alt="category" className="w-[100%] h-[100%] object-cover" />
          <Link to="/products/4" className="absolute min-w-[100px] bg-white border-none w-fit h-[40px] rounded-sm p-1 top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center">
             Thriller
          </Link>
        </div>
      </div>
      <div className="flex flex-col fex-2 gap-1">
        <div className="flex gap-1">
          <div className="gap-1 fex  relative overflow-hidden">
            <img src="https://images.pexels.com/photos/990432/pexels-photo-990432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="category" className="w-[100%] h-[100%] object-cover" />
            <Link to="/products/1" className="absolute min-w-[100px] bg-white border-none w-fit h-[40px] rounded-sm p-1 top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center">
              Spiritual
            </Link>
          </div>
          <div className="gap-1 fex  relative overflow-hidden">
            <img src="https://images.pexels.com/photos/34592/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="category" className="w-[100%] h-[100%] object-cover" />
            <Link to="/products/5" className="absolute min-w-[100px] bg-white border-none w-fit h-[40px] rounded-sm p-1 top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center">
               Non-Fiction
            </Link>
          </div>
        </div>
        <div className="fex  relative overflow-hidden">

          <img src="https://images.pexels.com/photos/1893264/pexels-photo-1893264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="category" className="w-[100%] h-[100%] object-cover" />
          <Link to="/products/6" className="absolute min-w-[100px] bg-white border-none w-fit h-[40px] rounded-sm p-1 top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center">
             Others
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories