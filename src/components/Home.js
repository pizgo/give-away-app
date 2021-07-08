import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeColumns from "./HomeColumns";
import HomeHowItWorks from "./HomeHowItWorks";
import HomeAbout from "./HomeAbout";
import HomeOrganizations from "./HomeOrganizations";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";


const Home = () => {
    return (
        <>

                <HomeHeader/>
                <HomeColumns/>
                <HomeHowItWorks/>
                <HomeAbout/>
                <HomeOrganizations/>
                <HomeContact/>
                <HomeFooter/>
        </>
    )
}

export default Home;




