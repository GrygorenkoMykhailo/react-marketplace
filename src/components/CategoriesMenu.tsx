import React from 'react';

interface CategoriesMenuProps {
    setCurrentCategory: (category: string | null) => void;
}

const CategoriesMenu: React.FC<CategoriesMenuProps> = ({ setCurrentCategory }) => {
    const categories = ['Бытовые товары', 'Одежда', 'Техника'];

    return (
        <div className="categories-menu">
            <h3>Категории</h3>
            <ul>
                {categories.map(category => (
                    <li key={category} onClick={() => setCurrentCategory(category)}>
                        {category}
                    </li>
                ))}
                <li onClick={() => setCurrentCategory(null)}>Все товары</li>
            </ul>
        </div>
    );
}

export default CategoriesMenu;
