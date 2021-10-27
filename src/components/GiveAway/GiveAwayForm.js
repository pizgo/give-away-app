import React, {useState} from 'react';

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import FormSummary from "./FormSummary";
import FormEnd from "./FormEnd";


const GiveAwayForm = () => {

    const [ currentStep, setCurrentStep] = useState (1);

    const [ dataStep1, setDataStep1 ] = useState ('ubrania, które nadają się do ponownego użycia');

    const [ dataStep2, setDataStep2 ] = useState ('1')

    const [ dataStep3, setDataStep3 ] = useState({
        select: "Poznań",
        text: ""
    })
    const [dataStep3Check, setDataStep3Check] = useState(false);

    const [ dataStep4Address, setDataStep4Address ] = useState ({
        street: "",
        city: "",
        zipcode: "",
        phone: "",
    })
    //walidacja do zipcode, walidacja do phone

    const [ dataStep4Date, setDataStep4Date ] = useState ({
        date: "",
        hour: "",
        misc: "",
    })


    const handleChangeStep1 = (e) => {
        setDataStep1(e.target.value);
        console.log(dataStep1)
    }

    const handleChangeStep2 = (e) => {
        setDataStep2(e.target.value);
        console.log(dataStep2)
    }

    const handleChangeStep3 = (e) => {
        const { name, value } = e.target;

        setDataStep3((prevDataStep3State) => ({
            ...prevDataStep3State,
            [name]: value
        }));
    }

    const handleChangeStep3Check = (e) => {
        setDataStep3Check(e.target.checked);
        console.log(dataStep3Check)
    }

    //const handleSubmit = przejście do ostatniego ekranu, czyli zwiększenie stanu o jeden
    //lub ustawienie stanu currentStep na 6

    const nextStep = () => {
        setCurrentStep (prevCurrentStep => prevCurrentStep + 1)
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
                    handleChangeStep1={handleChangeStep1}/>
                <Step2
                    currentStep={currentStep}
                    dataStep2={dataStep2}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChangeStep2={handleChangeStep2}/>
                <Step3
                    currentStep={currentStep}
                    dataStep3Check={dataStep3Check}
                    dataStep3={dataStep3}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChangeStep3={handleChangeStep3}
                    handleChangeStep3Check={handleChangeStep3Check}/>

                <Step4/>
                <FormSummary/>
            </form>
            <FormEnd/>
        </>
    )
}

export default GiveAwayForm;
