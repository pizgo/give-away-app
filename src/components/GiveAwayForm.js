import React, {useState} from 'react';

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import FormSummary from "./FormSummary";
import FormEnd from "./FormEnd";


const GiveAwayForm = () => {

    const [ currentStep, setCurrentStep] = useState (1);

    const [ dataStep1, setDataStep1 ] = useState ({
        radio1: false,
        radio2: false,
        radio3: false,
        radio4: false,
        radio5: false
    })

    const [ dataStep2, setDataStep2 ] = useState ({
        select: "-wybierz-",

    })

    // const [ userData, setUserData] = useState ({
    //     step1radio1: false,
    //     step1radio2: false,
    //     step1radio3: false,
    //     step1radio4: false,
    //     step1radio5: false,
    //     step2bag_sel: "-wybierz-",
    //     step3localization_sel: "-wybierz-",
    //     step3chbKids: false,
    //     step3checkbox2: false,
    //     step3checkbox3: false,
    //     step3checkbox4: false,
    //     step3checkbox5: false,
    //     step3textarea: "",
    //     step4street: "",
    //     step4city: "",
    //     step4zipcode: "",
    //     step4phone: "",
    //     step4data: "",
    //     step4time: "",
    //     step4note: ""
    // })

    const handleChangeStep1 = (e) => {
        const { name, value } = e.target;

        setDataStep1((prevDataStep1State) => ({
            ...prevDataStep1State,
            [name]: value
        }));
    }

    const handleChangeStep2 = (e) => {
        const { name, value } = e.target;

        setDataStep2((prevDataStep2State) => ({
            ...prevDataStep2State,
            [name]: value
        }));
    }

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //
    //     setUserData((prevUserDataState) => ({
    //         ...prevUserDataState,
    //         [name]: value
    //     }));
    // }

    //const handleSubmit = przejście do ostatniego ekranu, czyli zwiększenie stanu o jeden
    //lub ustawienie stanu currentStep na 6

    const nextStep = () => {
        setCurrentStep (prevCurrentStep => prevCurrentStep + 1)
        console.log(currentStep)
    }

    const prevStep = () => {
        setCurrentStep (prevCurrentStep => prevCurrentStep - 1)
    }




    return (
        <>
            <form>
                <Step1
                    currentStep={currentStep}
                    dataStep1={dataStep1}
                    nextStep={nextStep}
                    handleChange={handleChangeStep1}/>
                <Step2
                    currentStep={currentStep}
                    dataStep2={dataStep2}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChangeStep2}/>
                <Step3/>
                <Step4/>
                <FormSummary/>
            </form>
            <FormEnd/>
        </>
    )
}

export default GiveAwayForm;
