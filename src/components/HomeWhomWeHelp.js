import React, {useState, useEffect} from "react";
import Decoration from "../assets/Decoration.svg";
import HomeWhomWeHelpList from "./HomeWhomWeHelpList";
import data from "./WhomWeHelpData";


const HomeWhomWeHelp = () => {

    const [ collection, setCollection ] = useState (data["foundations"]);

    const handleClick = e => {
        setCollection(data[e.target.id])
    }

    const API = "http://localhost:3000";

    useEffect(()=> {
        fetch(`${API}/db`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    },[]);

    return (

        <div className="container">
            <section className="help">
                <div className="help__container">
                    <h1 className="help__header">
                        Komu pomagamy?
                    </h1>
                    <img src={Decoration} alt="" id="decoration" className="help__img"/>
                    <div className="help__buttons-container">
                        <p className="help__buttons-button" id='foundations' onClick={handleClick}>Fundacjom</p>
                        <p className="help__buttons-button" id='organizations' onClick={handleClick}>Organizacjom <br/>pozarządowym</p>
                        <p className="help__buttons-button" id='locals' onClick={handleClick}>Lokalnym <br/>zbiórkom</p>
                    </div>
                </div>
                <HomeWhomWeHelpList collection={collection}/>
                {/*<Pagination/>*/}
            </section>
        </div>

    )
}

//
//
// const HomeWhomWeHelp = () => {
//     let data_ = {
//         fundation: [
//             {}
//         ],
//         organizations: []
//     }
//     const handle = e => {
//         set(e.target.id)
//     }
//
//
//     return (
//         <div>
//             <a href="/Organizations">
//                 <p id="button" className="header__buttons-1" id='fundation' onClick={handle}>Organizacje</p>
//             </a>
//
//             <a href="/Fundations">
//                 <p id="button" className="header__buttons-1">Fundacje</p>
//             </a>
//
//             <a href="/Fundations">
//                 <p id="button" className="header__buttons-1">Fundacje</p>
//             </a>
//             {data_[collection].map()}
//         </div>
//     )
// }

export default HomeWhomWeHelp;
