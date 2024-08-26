import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import NavbarRecepies from './recepiesNavbar';
import "./recepiesSearch.css"

const Favorites = () => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    return (
        <div style={{ backgroundImage: 'url("https://as2.ftcdn.net/v2/jpg/08/31/36/29/1000_F_831362933_ZozsfSH83oQbV5AMGXg6Q0LP2beu4gzy.jpg")', height: "100vh", backgroundSize: "cover" }}>
            <NavbarRecepies />
            <br /><br />
            {favorites.length > 0 ? (
                <center>
                    <div className='main'>
                        {favorites.map((each) =>
                            <Card key={each.id} style={{ width: '17rem', border: "none" }} className='card'>
                                <Card.Img variant="top" src={each.image} style={{ borderRadius: "8px" }} />
                                <NavLink to={`/recipe/${each.id}`}>
                                    <Card.Title style={{ paddingTop: "15px" }}>
                                        <button style={{ backgroundColor: "rgb(23, 59, 69)", width: "200px", border: "none", height: "40px" }}>{each.name}</button>
                                    </Card.Title>
                                </NavLink>
                                <p><strong>Rating:</strong> {each.rating} <i className="fas fa-star"></i></p>
                                <button onClick={() =>toggleFavorite(each)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px" }}>
                                    Remove from Favorites
                                </button>
                            </Card>
                        )}
                    </div>
                </center>
            ) : (
                <div style={{ color: "white", textAlign: "center", paddingTop: "50px" }}>
                    <h2>No favorite recipes yet!</h2>
                </div>
            )}
        </div>
    );
};

export default Favorites;
