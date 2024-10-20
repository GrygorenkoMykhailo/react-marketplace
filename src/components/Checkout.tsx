import React from 'react';
import { Product } from './types';

interface CheckoutProps {
    cartItems: Product[];
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems }) => {
    return (
        <div className="checkout">
            <h2>Оформление заказа</h2>
            {cartItems.length === 0 ? (
                <p>Корзина пуста, добавьте товары для оформления заказа</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>{item.name} - {item.price} грн</li>
                    ))}
                </ul>
            )}
            {/* Дополнительная форма оформления заказа может быть добавлена здесь */}
        </div>
    );
}

export default Checkout;
