import React, { createContext, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/homeScreen";
// import SettingScreen from "../screens/settingScreen";
import ContactScreen from "../screens/contactScreen";
import AboutScreen from "../screens/aboutScreen";
import InvalidScreen from "../screens/invalid_screen";
import ProductDetails from "../screens/productdetails";
import DoctorsScreen from "../screens/doctorsscreen";
import EngineersScreen from "../screens/engineersscreen";
const LazySetting = React.lazy(()=>import("../screens/settingScreen"))
export const ProfileWrapper = createContext();
function Stack(){
    const [profileInfo,setProfileInfo]=useState({
        name:"ram",
        salary:"50k",
    })
    const [counter,setCounter]=useState(100);

    
    const changeName=(name)=>{
        setProfileInfo({...profileInfo,name:name})
    }
    const changeCounter=()=>{
        setCounter(counter+100)
    }
    const decrementHandler=()=>{
        if(counter>0){ setCounter(counter-100)}
       
    }
    return(
        <ProfileWrapper.Provider value={{
            profileInfo:profileInfo,
            changeName,
            counter:counter,
            changeCounter:changeCounter,
            decrementHandler:decrementHandler,
        }}>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/about' element={<AboutScreen/>}/>
            <Route path='/contact' element={<ContactScreen/>}>
            <Route path="doctors" element={<DoctorsScreen/>}/>
            <Route path="engineers" element={<EngineersScreen/>}/>
            </Route>
            <Route path='/setting' element={
                <Suspense fallback={<div>loading</div>}><LazySetting/></Suspense>
            }/>
            <Route path='*' element={<InvalidScreen/>}/>
            <Route path="/:category/:product_id/info" element={<ProductDetails/>}/>
        </Routes>
        </BrowserRouter>
        </ProfileWrapper.Provider>
    );
}
export default Stack;