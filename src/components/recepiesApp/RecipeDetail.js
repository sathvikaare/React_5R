import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./recipeDetail.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    const fetchRecipeDetail = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
            setRecipe(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Something went wrong", error);
        }
    };

    useEffect(() => {
        fetchRecipeDetail();
    }, [id]);

    if (!recipe) return <div className="loading">Loading...</div>;

    return (
        <div className="recipe-detail">
            <h3 className="recipe-title">{recipe.name}</h3>
            <center><img src={recipe.image} alt={recipe.name} className="recipe-image" /></center>
            <div className="recipe-info">
                <h4>Ingredients:</h4>
                <ul className="recipe-list">
                    {recipe.ingredients.map((each, index) => <li key={index}>{each}</li>)}
                </ul>
                <h4>Instructions:</h4>
                <ul className="recipe-list">
                    {recipe.instructions.map((each, index) => <li key={index}>{each}</li>)}
                </ul>
                <p><strong>Calories:</strong> {recipe.caloriesPerServing}</p>
                <p><strong>Meal Type:</strong> {recipe.Type}</p>
                <p><strong>Cooking Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                <p><strong>Rating:</strong> {recipe.rating} <i className="fas fa-star"></i></p>
            </div>
        </div>
    );
};

export default RecipeDetail;
