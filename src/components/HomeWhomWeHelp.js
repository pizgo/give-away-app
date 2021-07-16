import React from "react";
import Organizations from "./Organizations";



const HomeOrganizations = () => {
    let data = {
        fundation: [
            {}
        ],
        organizations: []
    }
    const handle = e => {
        set(e.target.id)
    }


    return (
        <div>
            <a href="/Organizations">
                <p id="button" className="header__buttons-1" id='fundation' onClick={handle}>Organizacje</p>
            </a>

            <a href="/Fundations">
                <p id="button" className="header__buttons-1">Fundacje</p>
            </a>

            <a href="/Fundations">
                <p id="button" className="header__buttons-1">Fundacje</p>
            </a>
            {data[collection].map()}
        </div>
    )
}

export default HomeOrganizations;
