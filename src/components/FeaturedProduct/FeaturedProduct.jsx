/* eslint-disable react/prop-types */
import useFetch from "../../hooks/useFetch"
import Card from "../Card/Card"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const FeaturedProduct = ({ type }) => {
  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type},`)

  return (
    <div className="bg-slate-200 px-12 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <h1 className="font-bold text-3xl md:w-1/2 p-6">Featured Products</h1>
        <p className=" text-lg md:w-1/2 p-6">Get featured books at great discount price!!</p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {error ? "Something went wrong!!" : (loading ? "Loading..." : data?.data.map((product) => {
          return (<SwiperSlide key={product.id}>
            <Card product={product} />
          </SwiperSlide>)
        }))
        }
      </Swiper>
    </div>
  );
}

export default FeaturedProduct