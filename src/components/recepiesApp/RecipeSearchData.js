import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import NavbarRecepies from './recepiesNavbar';
import { FavoritesContext } from './FavoritesContext';
import "./recepiesSearch.css"

const RecepieSearchData = () => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);
    const [recepies, setRecepies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    
    const fetchData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/recipes");
            setRecepies(response.data.recipes);
        } catch (error) {
            console.error("Something went wrong", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const inputHandler = (e) => {
        setSearchValue(e.target.value);
    };

    const filteredRecipesBySearch = recepies.filter(each =>
        each.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div style={{ backgroundImage: 'url("https://as2.ftcdn.net/v2/jpg/08/31/36/29/1000_F_831362933_ZozsfSH83oQbV5AMGXg6Q0LP2beu4gzy.jpg")', height: "100%", backgroundSize: "cover" }}>
            <NavbarRecepies />
            <br />
            <center>
                <input
                    type='text'
                    placeholder='Enter Recipe Name'
                    value={searchValue}
                    onChange={inputHandler}
                    style={{ width: "350px", border: "none", borderRadius: "8px", height: "30px" }}
                />
            </center>
            <br /><br />
            {recepies && (
                <center>
                    <div className='main'>
                        {filteredRecipesBySearch.map((each) =>
                            <Card key={each.id} style={{ width: '17rem', border: "none" }} className='card'>
                                <Card.Img variant="top" src={each.image} style={{ borderRadius: "8px" }} />
                                <NavLink to={`/recipe/${each.id}`}>
                                    <Card.Title style={{ paddingTop: "15px" }}>
                                        <button style={{ backgroundColor: "rgb(23, 59, 69)", width: "200px", border: "none", height: "40px" }}>{each.name}</button>
                                    </Card.Title>
                                </NavLink>
                                <p><strong>Rating:</strong> {each.rating} <i className="fas fa-star"></i></p>
                                <button onClick={() => toggleFavorite(each)} style={{ backgroundColor: "green", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px" }}>
                                    {favorites.some(fav => fav.id === each.id) ? "Remove from Favorites" : "Add to Favorites"}
                                </button>
                            </Card>
                        )}
                    </div>  
                </center>
            )}
        </div>
    );
};

export default RecepieSearchData;
