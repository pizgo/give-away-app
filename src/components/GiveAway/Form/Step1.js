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
                <p className="form__stepNumber">Krok 1/4</p>
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
                    <button type="button" className="form__buttons-btn" onClick={nextStep}>Dalej</button>
                </div>
            </div>
        </div>
    )
}

// const previousButton = () => {
//     if (currentStep !==1) {
//         return (
//             <button type="button" onClick={previousStep}>Wróć</button>
//         )
//     }
// }
//
// const nextButton = () => {
//     if (currentStep !==5) {
//         return (
//             <button type="button" onClick={nextStep}>Dalej</button>
//         )
//     }
// }

export default Step1;

//class Step1 extends React.Component {render() {
//   if (this.props.currentStep !== 1) { // Prop: The current step
//     return null
//   }
//   // The markup for the Step 1 UI
//   return(
//     <div className="form-group">
//       <label htmlFor="email">Email address</label>
//       <input
//         className="form-control"
//         id="email"
//         name="email"
//         type="text"
//         placeholder="Enter email"
//         value={this.props.email} // Prop: The email input data
//         onChange={this.props.handleChange} // Prop: Puts data into state
//       />
//     </div>
//   )}
// }