import React, { useEffect, useState } from 'react';
import "./Cart.scss";
import { shoppingCart } from '../Data/Data'; // Assuming this import is correct

const Cart = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [selectedCart, setSelectedCart] = useState([]);
    const [input, setInput] = useState('');
    const [filterData, setFilterData] = useState([]);

    const handleClick = (num) => {
        setActiveTab(num);
    };

    const handleCart = (cart) => {
        setSelectedCart([...selectedCart, cart]);
        console.log("Added to cart:", cart);
    };

    const handleRemove = (id) => {
        const updatedCart = selectedCart.filter((cart) => cart.id !== id);
        setSelectedCart(updatedCart);
        console.log("Removed from cart:", id);
    };

    const truncateString = (str, num) => {
        return str.length > num ? str.slice(0, num) + "..." : str;
    };

    const handleSearch = (e) => {
        setInput(e.target.value.toLowerCase());
    };

    useEffect(() => {
        const filteredData = shoppingCart.filter((cart) =>
            cart.title.toLowerCase().includes(input)
        );
        setFilterData(filteredData);
    }, [input]);

    return (
        <div className="cart_main">
            <div className="cart_tab">
                <ul>
                    <li
                        className={`tab ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => handleClick(1)}
                    >
                        Products
                    </li>
                    <li
                        className={`tab ${activeTab === 2 ? 'active' : ''}`}
                        onClick={() => handleClick(2)}
                    >
                        Buy Cart <span>{selectedCart.length}</span>
                    </li>
                </ul>
            </div>
            <div className="cart_search">
                <input type="text" placeholder="Search..." value={input} onChange={handleSearch} />
            </div>

            {activeTab === 1 && (
                <div className='cart'>
                    {filterData.map((cart, id) => (
                        <div className="card" key={id}>
                            <div className="card_img">
                                <img src={cart.images[0]} alt={cart.title} />
                            </div>
                            <div className="card_content">
                                <h2>{truncateString(cart.title, 25)}</h2>
                                <p>{truncateString(cart.description, 100)}</p>
                                <p className='Price'>$ {cart.price}</p>
                                <button onClick={() => handleCart(cart)}>Add To Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 2 && (
                <div className='cart'>
                    {selectedCart.map((cart, id) => (
                        <div className="card" key={id}>
                            <div className="card_img">
                                <img src={cart.images[0]} alt={cart.title} />
                            </div>
                            <div className="card_content">
                                <h2>{truncateString(cart.title, 25)}</h2>
                                <p>{truncateString(cart.description, 100)}</p>
                                <p className='Price'>$ {cart.price}</p>
                                <button onClick={() => handleRemove(cart.id)}>Remove Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default Cart;
