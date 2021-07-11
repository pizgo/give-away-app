import React from "react";

const HomeColumns = () => {

    return (

        <div className="container">
            <section className="columns">
                <div className="columns__container">
                    <div className="columns__column">
                        <p  className="columns__column-number">
                            10
                        </p>
                        <p className="columns__column-what">
                            oddanych worków
                        </p>
                        <p className="columns__column-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequatur corporis iste nobis perspiciatis quaerat sapiente voluptas.
                        </p>
                    </div>
                    <div className="columns__column">
                        <p className="columns__column-number">
                            5
                        </p>
                        <p className="columns__column-what">
                            wspartych organizacji
                        </p>
                        <p className="columns__column-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequatur corporis iste nobis perspiciatis quaerat sapiente voluptas.
                        </p>
                    </div>
                    <div className="columns__column">
                        <p className="columns__column-number">
                            7
                        </p>
                        <p className="columns__column-what">
                            zorganizowanych zbiórek
                        </p>
                        <p className="columns__column-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequatur corporis iste nobis perspiciatis quaerat sapiente voluptas.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HomeColumns;