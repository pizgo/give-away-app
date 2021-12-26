import React , {useState, useEffect} from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Navbar = () => {
    return (

        <>
            <MobileNavigation/>
            <Navigation/>
        </>
    )
}

export default Navbar;