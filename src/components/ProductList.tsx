import React from 'react';
import { Product } from './types'; // Импортируем тип Product

type ProductListProps = {
    products: Product[];
    addToCart: (product: Product) => void;
};

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div className="product" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>Цена: {product.price} грн</p>
                    <button onClick={() => addToCart(product)}>Добавить в корзину</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
