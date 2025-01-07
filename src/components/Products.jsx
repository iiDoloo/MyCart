import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const ourSelector = useSelector((state) => state.cart.items);
    const productsList = [
        {
            id: 1,
            title: "Product 1",
            price: 200,
            description: "This is a product"
        },
        {
            id: 2,
            title: "Product 2",
            price: 200,
            description: "This is a product"
        },
        {
            id: 3,
            title: "Product 3",
            price: 200,
            description: "This is a product"
        }
    ];

    const handleItemAdd = (indItem) => {
        dispatch(cartActions.addItemToCard(productsList[indItem]));
    };

    useEffect(() => {
        console.log(ourSelector);
    }, [ourSelector]);

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <div className="space-y-4">
                {productsList.map((x, i) => (
                    <div key={i} className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold">{x.title}</h4>
                        <p className="text-gray-400">{x.description}</p>
                        <p className="text-lg font-bold">${x.price}</p>
                        <button
                            onClick={() => handleItemAdd(i)}
                            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;