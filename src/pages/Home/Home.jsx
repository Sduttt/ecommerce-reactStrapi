/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from "react-router-dom";
import { Slider, FeaturedProduct, Categories } from "../../components";
import { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);
  const isSuccessful = searchParams.get('success');

  useEffect(() => {
    if (isSuccessful === 'true') {
      toast.success('Order placed successfully');
      dispatch(resetCart());
    } else if (isSuccessful === 'false') {
      toast.error('Order was not placed');
    }
  }, [location, dispatch]);

  return (
    <div>
      <div className="">
        <Toaster />
        <Slider />
        <FeaturedProduct type={"featured"} />
        <Categories />
      </div>
    </div>
  );
};

export default Home;