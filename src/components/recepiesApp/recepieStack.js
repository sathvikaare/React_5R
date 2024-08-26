import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from './about';
import RecipeDetail from './RecipeDetail';
import RecepieSearchData from './RecipeSearchData';
import TaskManagement from './TaskManagement';
import Favorites from './Favorites';
import { FavoritesProvider } from './FavoritesContext';

const RecepieStack = () => {
    return (
        <FavoritesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<RecepieSearchData />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/recipe/:id" element={<RecipeDetail />} />
                    <Route path="/TasksList" element={<TaskManagement />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </BrowserRouter>
        </FavoritesProvider>
    );
};

export default RecepieStack;
