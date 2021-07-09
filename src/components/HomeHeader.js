import React from "react";
import HomeHeroImage from "../assets/HomeHeroImage.jpg";
import Decoration from "../assets/Decoration.svg";

const HomeHeader = () => {

    return (

        <div className="container">
                <section className="header">
                        <div className="header__container">
                            <img src={HomeHeroImage} className="header__mainImg"/>

                            <div className="header__content">
                                    <p className="header__hello">
                                        Zacznij pomagać!<br/>
                                        Oddaj niechciane rzeczy w zaufane ręce</p>
                                    <img src={Decoration} id="decoration" className="header__decorationImg"/>
                                    <div className="header__buttons">
                                            <a href="/GiveAway">
                                                <p id="button" className="header__buttons-1">
                                                    Oddaj <br/>
                                                    rzeczy</p>
                                            </a>
                                            <a href="/OrganizeCollection">
                                                <p id="button" className="header__buttons-2">
                                                    Zorganizuj zbiórkę</p>
                                            </a>
                                    </div>
                             </div>
                        </div>
                </section>
        </div>
    )
}

export default HomeHeader;
