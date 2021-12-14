import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeColumns from "./HomeColumns";
import HomeHowItWorks from "./HomeHowItWorks";
import HomeAbout from "./HomeAbout";
import HomeWhomWeHelp from "./HomeWhomWeHelp";
import ContactForm from "../ContactForm";
import Footer from "../Footer";




const Home = () => {
    return (
        <>
                <HomeHeader/>
                <HomeColumns/>
                <HomeHowItWorks/>
                <HomeAbout/>
                <HomeWhomWeHelp/>
                <ContactForm/>
                <Footer/>

        </>
    )
}

export default Home;




