import React from 'react';
import BackgroundForm from "../../../assets/BackgroundForm.jpg";



const Step1 = ( {currentStep, dataStep1, handleChangeStep1, nextStep}) => {

    if (currentStep !==1) {
        return null
    }

    else
        return (
        <div className="container">

            <section className="form__header">
                <img src={BackgroundForm} alt="" className="form__img"/>
                <h3 className="form__header-main">Ważne!</h3>
                <p className="form__header-text">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
                    będziemy wiedzieli, komu najlepiej je przekazać.</p>
            </section>

            <div className="form__container">
                <p className="form__stepNumber">Krok {currentStep}/4</p>
                <h3 className="form__text-header">Zaznacz co chcesz oddać:</h3>
                <div className="form__box">
                    <div className="form__radioContainer">
                        <label className="form__text-basic radio__label">
                            <input
                                onChange={handleChangeStep1}
                                type="radio"
                                checked={dataStep1 === "ubrania, które nadają się do ponownego użycia" }
                                value="ubrania, które nadają się do ponownego użycia"/>
                            ubrania, które nadają się do ponownego użycia
                        </label>
                    </div>
                    <div className="form__radioContainer">
                        <label className="form__text-basic radio__label">
                            <input
                                onChange={handleChangeStep1}
                                type="radio"
                                checked={dataStep1 === "ubrania do wyrzucenia"}
                                value="ubrania do wyrzucenia"/>
                            ubrania do wyrzucenia
                        </label>
                    </div>
                    <div className="form__radioContainer">
                        <label className="form__text-basic radio__label">
                            <input
                                onChange={handleChangeStep1}
                                type="radio"
                                checked={dataStep1 === "zabawki"}
                                value="zabawki"/>
                            zabawki
                        </label>
                    </div>
                    <div className="form__radioContainer">
                        <label className="form__text-basic radio__label">
                            <input
                                onChange={handleChangeStep1}
                                type="radio"
                                checked={dataStep1 === "książki"}
                                value="książki"/>
                            książki
                        </label>
                    </div>
                    <div className="form__radioContainer">
                        <label className="form__text-basic radio__label" >
                            <input
                                onChange={handleChangeStep1}
                                type="radio"
                                checked={dataStep1 === "inne"}
                                value="inne"/>
                            inne
                        </label>
                    </div>
                </div>
                <div className="form__buttons">
                    <button type="button" className="form__buttons-btn btn__next" onClick={nextStep}>Dalej</button>
                </div>
            </div>
        </div>
    )
}


//     <p>wartość to {dataStep2}</p>
//     <select onChange={handleChangeStep2} defaultValue={dataStep2}>
//         {/*<option value="" disabled>wybierz</option>*/}
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//     </select>
//
//
//
//
//

//
// </>

export default Step1;

