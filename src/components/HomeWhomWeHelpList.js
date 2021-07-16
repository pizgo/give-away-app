import React from "react";

const WhomWeHelpList = (props) => {


    return (


        <div className="helpInfo__container">
            <div className="helpInfo__title">{props.collection.title}</div>
            <ul className="hepInfo__list">
                {props.collection.list.map((el, key) =>
                <li key={key}>
                    <div className="helpInfo__list-col1">
                        <div className = "helpInfo__list-name">{el.name}</div>
                        <div className = "helpInfo__list-desc">{el.desc}</div>
                    </div>
                    <div className="helpInfo__list__col2">
                        <div className = "helpInfo__list-items">{el.items}</div>
                    </div>
                </li>
                )
                }
            </ul>
        </div>
    )
}

export default WhomWeHelpList;


