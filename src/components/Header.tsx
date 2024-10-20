import React from 'react';
import { Product } from './types'; // Импортируем тип Product

type HeaderProps = {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    handleSearchKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    cartItems: Product[];
    handleSearchClick: () => void;  // Добавляем обработчик для клика по кнопке поиска
};

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm, handleSearchKeyPress, cartItems, handleSearchClick }) => {
    return (
        <header className="header">
            <div className="header-left">
                <h1>Магазин</h1>
            </div>
            <div className="header-center">
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    onKeyPress={handleSearchKeyPress}  // Добавляем обработчик нажатия клавиши Enter
                    placeholder="Поиск товаров..."
                />
                <button onClick={handleSearchClick}>Поиск</button>  {/* Кнопка для поиска */}
            </div>
            <div className="header-right">
                <div className="cart">
                    <span>Корзина: {cartItems.length} товаров</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
