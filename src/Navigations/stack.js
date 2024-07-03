import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/homeScreen";
import SettingScreen from "../screens/settingScreen";
import ContactScreen from "../screens/contactScreen";
import AboutScreen from "../screens/aboutScreen";
import InvalidScreen from "../screens/invalid_screen";
import ProductDetails from "../screens/productdetails";
import DoctorsScreen from "../screens/doctorsscreen";
import EngineersScreen from "../screens/engineersscreen";

function Stack(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/about' element={<AboutScreen/>}/>
            <Route path='/contact' element={<ContactScreen/>}>
            <Route path="doctors" element={<DoctorsScreen/>}/>
            <Route path="engineers" element={<EngineersScreen/>}/>
            </Route>
            <Route path='/setting' element={<SettingScreen/>}/>
            <Route path='*' element={<InvalidScreen/>}/>
            <Route path="/:location/:restaurantId/info" element={<ProductDetails/>}/>
        </Routes>
        </BrowserRouter>
        
        
    );
}
export default Stack;