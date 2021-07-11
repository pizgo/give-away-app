import React from "react";
import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";
import People from "../assets/People.jpg";

const HomeAbout = () => {

    return (

        <div className="container">
            <section className="about">
                <div className="about__info">
                    <div className="about__info-text"></div>
                        <p id="section2" className="about__header">
                           O nas
                        </p>
                        <img src={Decoration} id="decoration" className="about__decorationImg"/>
                        <p className="about__desc">
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur cum expedita id impedit inventore laudantium pariatur quia quos sapiente?
                         </p>
                    </div>

                    <img src={Signature} className="about__info-img"/>

                <div className="about__img">
                    <img src={People} className="about__img-pic"/>
                </div>
            </section>
        </div>
    )
}

export default HomeAbout;