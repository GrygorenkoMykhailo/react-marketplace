import React from 'react';
import { Product } from './types'; // Импортируем тип Product

interface CartProps {
    cartItems: Product[];
    removeFromCart: (id: number) => void; // Пример метода для удаления товара из корзины
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
    return (
        <div>
            <h3>Корзина</h3>
            {cartItems.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.price} грн
                            <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
