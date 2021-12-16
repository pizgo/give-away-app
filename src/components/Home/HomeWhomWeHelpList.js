import React from "react";

const HomeWhomWeHelpList = (props) => {

    console.log("running list component")
    console.log(props)


    let itemsToShow = props.currentItems

    return (

<div className="container">

        <div className="help__box2">
            <div className="help__box2-title">{props.chosenReceiverTitle}</div>
            <ul className="help__box2-list">
                {itemsToShow.map((el, key) =>
                        <li key={key} className="help__box2-listRow">

                            <div className="help__box2-listCol1">
                                <div className = "help__box2-name">{el.name}</div>
                                <div className = "help__box2-desc">{el.desc}</div>
                            </div>

                            <div className="help__box2-listCol2">
                                <div className = "help__box2-items">{el.item}</div>
                            </div>
                        </li>)}
            </ul>
        </div>

</div>
    )
}

export default HomeWhomWeHelpList;


