import React, {useState} from 'react';

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import FormSummary from "./FormSummary";
import FormEnd from "./FormEnd";


const GiveAwayForm = () => {

    const [ userData, setUserData] = useState ({
        step1checkbox1: false,
        step1checkbox2: false,
        step1checkbox3: false,
        step1checkbox4: false,
        step1checkbox5: false,
        step2bag_sel: "-wybierz-",
        step3localization_sel: "-wybierz-",
        step3chbKids: false,
        step3checkbox2: false,
        step3checkbox3: false,
        step3checkbox4: false,
        step3checkbox5: false,
        step3textarea: "",
        step4street: "",
        step4city: "",
        step4zipcode: "",
        step4phone: "",
        step4data: "",
        step4time: "",
        step4note: ""
    })
    const [ currentStep, setCurrentStep] = useState (1);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserData((prevUserDataState) => ({
            ...prevUserDataState,
            [name]: value
        }));
    }

    //const handleSubmit = przejście do ostatniego ekranu, czyli zwiększenie stanu o jeden
    //lub ustawienie stanu currentStep na 6

    const nextStep = () => {
        if (currentStep <= 4) {
            setCurrentStep (prevCurrentStep => prevCurrentStep + 1)
        }
    }

    const previousStep = () => {
        if ((currentStep >= 2) && ( currentStep <=5)) {
            setCurrentStep (prevCurrentStep => prevCurrentStep - 1)
        }

    }

    //const incrementCounter = () => { setCounter( prevCounter => prevCounter + 1 ) }
    //     const decrementCounter = () => {  setCounter( prevCounter => prevCounter - 1 )  }

    // _next() {
    //     let currentStep = this.state.currentStep
    //     // If the current step is 1 or 2, then add one on "next" button click
    //     currentStep = currentStep >= 2? 3: currentStep + 1
    //     this.setState({
    //       currentStep: currentStep
    //     })
    //   }



    return (
        <>
            <form >
                <Step1
                    currentStep={currentStep}
                    userData={userData}
                    handleChange={handleChange}/>
                <Step2/>
                <Step3/>
                <Step4/>
                <FormSummary/>
            </form>
            <FormEnd/>
        </>
    )
}

export default GiveAwayForm;
