
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/2044441/pexels-photo-2044441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1775777/pexels-photo-1775777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1623775027611-4d02c1b1e0ad?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay= {{
          delay: 2500,
          disableOnInteraction: false,
          }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {
          data.map((imageUrl) =>
            <SwiperSlide key={imageUrl} >
              <img className="w-screen h-[500px] object-cover" src={imageUrl} alt="slider" />
            </SwiperSlide>
          )
        }
        
      </Swiper>
    </>
  );
}


export default Slider

