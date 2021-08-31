import React from 'react';



const Step1 = ( {currentStep, userData, handleChange}) => {
    return (
        <>
            <div>
                <p>Ważne! Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
                    będziemy wiedzieli, komu najlepiej je przekazać</p>
            </div>
            <form>
                <label>ubrania, które nadają się do ponownego użycia</label>
                <input onChange={handleChange}  type="checkbox" name="name" value={userData.step1checkbox1}/>
                <label>ubrania do wyrzucenia</label>
                <input onChange={handleChange}  type="checkbox" name="name" value={userData.step1checkbox2}/>
                <label>zabawki</label>
                <input onChange={handleChange}  type="checkbox" name="name" value={userData.step1checkbox3}/>
                <label>książki</label>
                <input onChange={handleChange}  type="checkbox" name="name" value={userData.step1checkbox4}/>
                <label>inne</label>
                <input onChange={handleChange}  type="checkbox" name="name" value={userData.step1checkbox5}/>
            </form>
        </>
    )
}

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