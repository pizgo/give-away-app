import React from 'react';



const Step1 = ( {currentStep, dataStep1, handleChangeStep1, nextStep}) => {

    if (currentStep !==1) {
        return null
    }

    else
        return (
        <>
            <div>
                <p>Ważne! Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
                    będziemy wiedzieli, komu najlepiej je przekazać</p>
                <h2>Radio to {dataStep1}</h2>
            </div>

                <label>
                    ubrania, które nadają się do ponownego użycia
                </label>
                <input
                    onChange={handleChangeStep1}
                    type="radio"
                    checked={dataStep1 === "ubrania, które nadają się do ponownego użycia" }
                    value="ubrania, które nadają się do ponownego użycia"/>
            ubrania, które nadają się do ponownego użycia
                <label>
                    <input
                        onChange={handleChangeStep1}
                        type="radio"
                        checked={dataStep1 === "ubrania do wyrzucenia"}
                        value="ubrania do wyrzucenia"/>
                    ubrania do wyrzucenia
                </label>
                <label>
                    <input
                        onChange={handleChangeStep1}
                        type="radio"
                        checked={dataStep1 === "zabawki"}
                        value="zabawki"/>
                    zabawki
                </label>
                <label>
                    <input
                        onChange={handleChangeStep1}
                        type="radio"
                        checked={dataStep1 === "książki"}
                        value="książki"/>
                    książki
                </label>
                <label>
                    <input
                        onChange={handleChangeStep1}
                        type="radio"
                        checked={dataStep1 === "inne"}
                        value="inne"/>
                    inne
                </label>








                <button type="button" onClick={nextStep}>Dalej</button>

        </>
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