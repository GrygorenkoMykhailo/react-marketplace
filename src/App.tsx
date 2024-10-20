import React, { useState } from 'react';
import CategoriesMenu from './components/CategoriesMenu'; // Правильный путь
import ProductList from './components/ProductList';
import Header from './components/Header';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { Product } from './components/types'; // Импортируйте интерфейс Product
import './App.css';
import SignInModal from './components/SignInModal/SingInModal';

const App: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [currentCategory, setCurrentCategory] = useState<string | null>(null);

    // Пример товаров
    const products: Product[] = [
        { id: 1, name: 'Смартфон', price: 10000, category: 'Техника', image: 'images/smartphone.jpg' },
        { id: 2, name: 'Ноутбук', price: 25000, category: 'Техника', image: 'images/laptop.jpg' },
        { id: 3, name: 'Футболка', price: 500, category: 'Одежда', image: 'images/tshirt.jpg' },
        { id: 4, name: 'Холодильник', price: 15000, category: 'Бытовые товары', image: 'images/fridge.jpg' },
        // Добавьте больше товаров по желанию
    ];

    const addToCart = (product: Product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    // Функция для обработки нажатия клавиши Enter
    const handleSearchKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            console.log('Поиск по запросу:', searchTerm);
            // Здесь можно добавить дополнительную логику поиска
        }
    };

    // Функция для обработки клика на кнопку поиска
    const handleSearchClick = () => {
        console.log('Поиск по запросу:', searchTerm);
        // Здесь можно добавить дополнительную логику поиска
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (currentCategory ? product.category === currentCategory : true)
    );

    return (
        <>
            <div className="app">
                <Header 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                    handleSearchKeyPress={handleSearchKeyPress}  // Передаем функцию для Enter
                    handleSearchClick={handleSearchClick}  // Передаем функцию для кнопки поиска
                    cartItems={cartItems} 
                />
                <div className="main-content">
                    <CategoriesMenu setCurrentCategory={setCurrentCategory} />
                    <ProductList products={filteredProducts} addToCart={addToCart} />
                </div>
            </div>
            <SignInModal show={true} />
        </>
    );
}

export default App;
