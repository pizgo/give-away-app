import React from "react";

const HomeWhomWeHelpList = (props) => {

    console.log("running list component")
    console.log(props)


    let itemsToShow = props.currentItems

    return (

<div className="container">
    <section className= "helpInfo">
        <div className="helpInfo__container">
            <div className="helpInfo__title">{props.collectionTitle}</div>
            <ul className="helpInfo__list">

                {
                    itemsToShow.map((el, key) =>
                        <li key={key} className="helpInfo__list-row">

                            <div className="helpInfo__list-col1">
                                <div className = "helpInfo__list-name">{el.name}</div>
                                <div className = "helpInfo__list-desc">{el.desc}</div>
                            </div>

                            <div className="helpInfo__list-col2">
                                <div className = "helpInfo__list-items">{el.items}</div>
                            </div>
                        </li>
                )
                }
            </ul>
        </div>
    </section>
</div>
    )
}

export default HomeWhomWeHelpList;


