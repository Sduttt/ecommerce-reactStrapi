import { useState } from "react"
import { GrPrevious, GrNext } from "react-icons/gr";
const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/2044441/pexels-photo-2044441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1775777/pexels-photo-1775777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1623775027611-4d02c1b1e0ad?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  const [activeimg, setActiveimg] = useState(0)

  const NextImg = () => {
    activeimg >= data.length-1 ? setActiveimg(0) : setActiveimg(activeimg+1)
  }

  const PrevImg = () => {
    activeimg <= 0 ? setActiveimg(data.length-1) : setActiveimg(activeimg-1)
  }

  return (
    <div className="relative">
      <img className="w-screen h-[500px] object-cover" src={data[activeimg]} alt="slider" />
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-r" onClick={PrevImg}><GrPrevious /></button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-l" onClick={NextImg}><GrNext /></button>
    </div>
  )
}

export default Slider