import React from "react";
import Decoration from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon1.svg";
import Icon2 from "../assets/Icon2.svg";
import Icon3 from "../assets/Icon3.svg";
import Icon4 from "../assets/Icon4.svg";

const HomeHowItWorks = () => {

    return (
        <div className="container">
            <section id="section1" className="steps">
                <div className="steps__section1">
                    <p className="steps__section1-text">
                        Wystarczą 4 proste kroki
                    </p>
                    <img src={Decoration} id="decoration" className="steps__section1-img"/>
                </div>

                <div className="steps__section2">
                    <div className="steps__section2-container">
                            <div className="steps__section2-step">
                                <img src={Icon1} className="steps__section2-step-img"/>
                                <p className="steps__section2-step-action">
                                    Wybierz rzeczy
                                </p>
                                <p className="steps__section2-step-desc">
                                    ubrania, zabawki, <br/>sprzęt i inne
                                </p>
                            </div>
                            <div className="steps__section2-step">
                                <img src={Icon2} className="steps__section2-step-img"/>
                                <p className="steps__section2-step-action">
                                    Spakuj je
                                </p>
                                <p className="steps__section2-step-desc">
                                    skorzystaj z <br/>worków na śmieci
                                </p>
                            </div>
                            <div className="steps__section2-step">
                                <img src={Icon3} className="steps__section2-step-img"/>
                                <p className="steps__section2-step-action">
                                    Zdecyduj komu <br/>chcesz pomóc
                                </p>
                                <p className="steps__section2-step-desc">
                                    wybierz zaufane <br/>miejsce
                                </p>
                            </div>
                            <div className="steps__section2-step">
                                <img src={Icon4} className="steps__section2-step-img"/>
                                <p className="steps__section2-step-action">
                                    Zamów kuriera
                                </p>
                                <p className="steps__section2-step-desc">
                                    kurier przyjedzie <br/>w dogodnym terminie
                                </p>
                            </div>
                    </div>
                </div>

                <div className="steps__section3">
                    <a href="/GiveAway">
                        <p id="button" className="steps__section3-btn">
                                Oddaj <br/>
                                rzeczy</p>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default HomeHowItWorks;
