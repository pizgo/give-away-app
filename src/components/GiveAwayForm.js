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



    return (
        <>
            <form onSubmit={handleSubmit}>
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
