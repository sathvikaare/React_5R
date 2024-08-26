import React from 'react';
import NavbarRecepies from './recepiesNavbar';

const About = () => {
    return (
        <div style={{ backgroundImage: 'url("https://st4.depositphotos.com/4590583/31070/i/450/depositphotos_310701100-stock-photo-blue-banner-cooking-top-view.jpg")', height: "100vh", backgroundSize: "cover" }}>
            <NavbarRecepies />
            <div style={{ padding: "20px", color: "white" }}>
                <h1>About the Recipe App</h1>
                <p>Welcome to the Recipe App! This app allows you to search for delicious recipes, view detailed instructions, and manage your favorite recipes all in one place.</p>
                
                <h2>Features</h2>
                <ul>
                    <li>**Search Recipes:** Use the search bar to find recipes by name.</li>
                    <li>**Recipe Details:** Click on any recipe to view detailed information including ingredients, instructions, and nutritional information.</li>
                    <li>**Favorites:** Add your favorite recipes to the favorites list and easily access them from the Favorites tab in the navbar.</li>
                </ul>
                
                <h2>How It Works</h2>
                <ol>
                    <li>**Search:** Type in the name of the recipe you are looking for in the search bar.</li>
                    <li>**View Details:** Click on the recipe name to view detailed information about the recipe.</li>
                    <li>**Add to Favorites:** Click the "Add to Favorites" button to save the recipe to your favorites list.</li>
                    <li>**View Favorites:** Navigate to the Favorites tab in the navbar to view all your saved recipes.</li>
                </ol>
                
                <p>We hope you enjoy using the Recipe App and find it useful for your cooking needs!</p>
            </div>
        </div>
    );
};

export default About;
