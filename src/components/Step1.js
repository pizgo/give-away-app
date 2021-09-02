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
            </div>
                <input onChange={handleChangeStep1}  type="radio" name="name" value={dataStep1.radio1}/>
                <label>ubrania, które nadają się do ponownego użycia</label>

                <input onChange={handleChangeStep1}  type="radio" name="name" value={dataStep1.radio2}/>
                <label>ubrania do wyrzucenia</label>

                 <input onChange={handleChangeStep1}  type="radio" name="name" value={dataStep1.radio3}/>
                <label>zabawki</label>

                <input onChange={handleChangeStep1}  type="radio" name="name" value={dataStep1.radio4}/>
                <label>książki</label>

                <input onChange={handleChangeStep1}  type="radio" name="name" value={dataStep1.radio5}/>
                <label>inne</label>

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