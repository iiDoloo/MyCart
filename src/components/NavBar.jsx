import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const ourSelector = useSelector((state) => state.cart.items);

    useEffect(() => {
        console.log("reduce", ourSelector.reduce((acc, curV) => acc + curV.quantity, 0));
    }, [ourSelector]);

    return (
        <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex justify-between items-center">
                <li className="text-xl font-bold">Redux Cart</li>
                <li className="text-lg">Cart Info: {ourSelector.reduce((acc, curV) => acc + curV.quantity, 0)}</li>
            </ul>
        </nav>
    );
};

export default NavBar;