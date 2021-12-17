import React from "react";
import HomeHeroImage from "../../assets/HomeHeroImage.jpg";
import Decoration from "../../assets/Decoration.svg";

const HomeHeader = () => {

    return (
        <div className="container">
                <section className="header">
                            <img src={HomeHeroImage} alt="" className="header__img"/>
                            <div className="header__content">
                                    <p className="header__hello">
                                        Zacznij pomagać!<br/>
                                        Oddaj niechciane rzeczy w zaufane ręce</p>
                                    <img src={Decoration} alt="" id="decoration" className="header__decorationImg"/>
                                    <div className="header__buttons">
                                            <a href="/logowanie">
                                                <p id="button" className="header__buttons-btn">
                                                    Oddaj <br/>
                                                    rzeczy</p>
                                            </a>
                                            <a href="/OrganizeCollection">
                                                <p id="button" className="header__buttons-btn">
                                                    Zorganizuj <br/>zbiórkę</p>
                                            </a>
                                    </div>
                             </div>
                </section>
        </div>
    )
}

export default HomeHeader;
