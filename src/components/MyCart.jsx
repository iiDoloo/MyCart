import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceActions } from '../store/myCartToggler';
import { cartActions } from '../store/cartSlice';

const MyCart = () => {
    const dispatch = useDispatch();
    const cartToggler = useSelector((state) => state.mycart.cartIsVisible);
    const ourSelector = useSelector((state) => state.cart.items);

    const handleToggle = () => {
        dispatch(cartSliceActions.toggleCart());
    };

    const handleItemRemove = (itemId) => {
        dispatch(cartActions.removeItemFromCart(itemId));
    };

    return (
        <div>
            <div className="p-4 bg-gray-800 text-white">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">My Cart</h1>
                    <button
                        onClick={handleToggle}
                        className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition duration-300"
                    >
                        {cartToggler ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {cartToggler && (
                <div className="p-4 bg-gray-700 text-white">
                    {ourSelector.map((item, i) => (
                        <div key={i} className="mb-4 p-3 bg-gray-600 rounded-lg">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm">Quantity: {item.quantity}</p>
                            <p className="text-sm">${item.price} DH per Item</p>
                            <p className="font-bold">Total: ${item.totalPrice}</p>
                            <button
                                onClick={() => handleItemRemove(item.itemId)}
                                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyCart;