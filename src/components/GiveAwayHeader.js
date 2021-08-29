import React from "react";
import FormHeroImage from "../assets/FormHeroImage.jpg";
import Decoration from "../assets/Decoration.svg";

const GiveAwayHeader = () => {

    return (

        <div className="container">
            <section className="gaHeader">
                {/*<div className="gaHeader__imgBox">*/}
                <img src={FormHeroImage} alt="" className="gaHeader__img"/>
                {/*</div>*/}

                <div className="gaHeader__container">
                    <p className="gaHeader__text1">
                        Oddaj rzeczy, ktorych już nie chcesz<br/>
                        POTRZEBUJĄCYM</p>
                    <img src={Decoration} alt="" id="decoration" className="gaHeader-decorationImg"/>
                    <p className="gaHeader__text2">
                        Wystarczą cztery proste kroki:</p>
                    <div className="gaHeader__step">
                        <div className="gaHeader__step__box">
                            <p className="gaHeader__step-number">1</p>
                            <p className="gaHeader__step-text">Wybierz <br/>rzeczy</p>
                        </div>
                        <div className="gaHeader__step__box">
                            <p className="gaHeader__step-number">2</p>
                            <p className="gaHeader__step-text">Spakuj je <br/>w worki</p>
                        </div>
                        <div className="gaHeader__step__box">
                            <p className="gaHeader__step-number">3</p>
                            <p className="gaHeader__step-text">Wybierz <br/>fundację</p>
                        </div>
                        <div className="gaHeader__step__box">
                            <p className="gaHeader__step-number">4</p>
                            <p className="gaHeader__step-text">Zamów <br/>kuriera</p>
                        </div>
                    </div>
                    <div className="gaHeader__square">
                        <div className="gaHeader__square-item"></div>
                        <div className="gaHeader__square-item"></div>
                        <div className="gaHeader__square-item"></div>
                        <div className="gaHeader__square-item"></div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default GiveAwayHeader;
