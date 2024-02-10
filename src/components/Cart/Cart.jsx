import { FaCartPlus, FaTrash } from "react-icons/fa"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { addToCart, removeItem } from "../../redux/cartReducer";

const Cart = () => {

    const products = useSelector(state => state.cart.products)
    const totalItems = products.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        const product = products.find(product => product.id === id);
        if (product.quantity > 1) {
            dispatch(addToCart({ ...product, quantity: -1 }));
        } else {
            dispatch(removeItem(id));
        }
    };

    return (
        <>
            <button className="btn flex px-2 py-1 text-3xl" onClick={() => document.getElementById('my_modal_5').showModal()}>
                <FaCartPlus />
                <div className="rounded-full w-4 h-4 flex justify-center items-center text-sm relative bottom-3 right-2 font-semibold text-white bg-error p-1">{totalItems}</div>
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-black">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Cart Items</h3>
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
                                                <p className="font-bold">{product.title}</p>
                                                <p className="text-sm">Quantity: {product.quantity}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="font-bold mr-2">Rs{product.price * product.quantity}</p>
                                            <button className="text-red-500" onClick={() => handleRemove(product.id)}>
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                ))
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
                            <div className="text-xl font-medium">
                                Total: Rs {totalPrice}
                            </div>
                            <form method="dialog">
                                <button className="btn">Checkout</button>
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