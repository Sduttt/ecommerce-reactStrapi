import { FaCartPlus, FaTrash } from "react-icons/fa"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { addToCart, removeItem, resetCart } from "../../redux/cartReducer";
import toast from 'react-hot-toast';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from "../../makeRequest";

const Cart = () => {

    const products = useSelector(state => state.cart.products)
    const totalItems = products.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

    const itemRemove = () => toast.success('Item removed successfully');
    const cartReset = () => toast.success('Cart reset successful');

    const dispatch = useDispatch();

    const stripePromise = loadStripe(import.meta.env.VITE_REACT_STRIPE_PUBLIC_KEY);

    const handleRemove = (id) => {
        const product = products.find(product => product.id === id);
        if (product.quantity > 1) {
            dispatch(addToCart({ ...product, quantity: product.quantity - 1 }));
        } else {
            dispatch(removeItem(id));
        }
    };

    const handleCheckout = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                products,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.id,
            });
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <button className=" flex px-2 py-1 text-3xl  hover:text-gray-200" onClick={() => document.getElementById('my_modal_5').showModal()}>
                <FaCartPlus />
                <div className="rounded-full w-4 h-4 flex justify-center items-center text-sm relative bottom-1 right-2 font-semibold text-white bg-error p-1">{totalItems}</div>
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-black">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Cart</h3>
                    <div className="">

                        {
                            products.length === 0 ? (
                                <div className="text-center">No items in cart</div>

                            ) :
                                products.map((product, index) => (
                                    <div key={index} className="flex justify-between items-center py-2">
                                        <div className="flex items-center">
                                            <img src={product.img} alt="product" className="w-16 h-16" />
                                            <div className="ml-2">
                                                <p className="font-bold capitalize">{product.title}</p>
                                                <p className="text-sm">Quantity: {product.quantity}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="font-bold mr-2">Rs{product.price * product.quantity}</p>
                                            <button className="text-red-500" onClick={() => {
                                                handleRemove(product.id);
                                                itemRemove();
                                            }}>
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                ))

                        }
                        {
                            products.length === 0 ? null :

                                <div className="text-xl font-medium text-right">
                                    Total: Rs {totalPrice}
                                </div>
                        }
                        {/* {
                            products.map((product, index) => (
                                <div key={index} className="flex justify-between items-center py-2">
                                    <div className="flex items-center">
                                        <img src={product.img} alt="product" className="w-16 h-16" />
                                        <div className="ml-2">
                                            <p className="font-bold">{product.title}</p>
                                            <p className="text-sm">Quantity: {product.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="font-bold">Rs{product.price * product.quantity}</p>
                                </div>
                            ))
                        } */}
                    </div>
                    {products.length === 0 ? null :
                        <div className="modal-action flex items-center justify-between">
                            <button className="btn" onClick={() => {
                                dispatch(resetCart());
                                cartReset();
                            }}>Reset</button>
                            <form method="dialog">
                                <button onClick={handleCheckout} className="btn btn-success">Checkout</button>
                            </form>
                        </div>}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default Cart