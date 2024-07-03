import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component{
   render(){
    const liststyle={
        height:400,
    }
        return (
            <Carousel width={"40%"} >
                <div>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" style={liststyle}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" style={liststyle} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"  style={liststyle}/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
}
};
export default DemoCarousel;