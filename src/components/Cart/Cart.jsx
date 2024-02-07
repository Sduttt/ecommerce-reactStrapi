import { FaCartPlus } from "react-icons/fa"

const Cart = () => {
    return (
        <>
            <button className="btn flex px-2 py-1 text-3xl" onClick={() => document.getElementById('my_modal_5').showModal()}>
                <FaCartPlus />
                <div className="rounded-full w-4 h-4 flex justify-center items-center text-sm relative bottom-3 right-2 font-semibold text-white bg-error p-1">7</div>
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-black">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Cart Items</h3>
                    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                    <div className="">
                        <div className="flex justify-between items-center py-2">
                            <div className="flex items-center">
                                <img src="https://via.placeholder.com/150" alt="product" className="w-16 h-16" />
                                <div className="ml-2">
                                    <p className="font-bold">Product Name</p>
                                    <p className="text-sm">Quantity: 1</p>
                                </div>
                            </div>
                            <p className="font-bold">$100</p>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <div className="flex items-center">
                                <img src="https://via.placeholder.com/150" alt="product" className="w-16 h-16" />
                                <div className="ml-2">
                                    <p className="font-bold">Product Name</p>
                                    <p className="text-sm">Quantity: 1</p>
                                </div>
                            </div>
                            <p className="font-bold">$100</p>
                        </div>
                    </div>
                    <div className="modal-action flex items-center justify-between">
                        <div className="text-xl font-medium">
                            Total: $200
                        </div>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Checkout</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default Cart