import React, {useState} from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.js";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import FormSummary from "./FormSummary";
import FormEnd from "./FormEnd";

//way of presenting data from checkbox
const FormSummaryStep3CheckPresentation = (dataStep3Check) => {
    let result = [];
    if (dataStep3Check.kids) {
        result.push("dzieciom")
    }
    if (dataStep3Check.singleMoms) {
        result.push("samotnym matkom")
    }
    if (dataStep3Check.homeless) {
        result.push("bezdomnym")
    }
    if (dataStep3Check.disabled) {
        result.push("niepełnosprawnym")
    }
    if (dataStep3Check.elderly) {
        result.push("osobom starszym")
    }
    return result;
};

const GiveAwayForm = () => {

    const [ dataStep1, setDataStep1 ] = useState ('');
    const [ dataStep2, setDataStep2 ] = useState ('—wybierz—')
    const [ dataStep3, setDataStep3 ] = useState({
        select: "—wybierz—",
        text: ""
    })
    //TODO: refator, extrat to one global variable: step3InitialValue
    const [dataStep3Check, setDataStep3Check] = useState({
        kids: false,
        singleMoms: false,
        homeless: false,
        disabled: false,
        elderly: false
    });
    //TODO: refator, extrat to one global variable: step4InitialValue
    const [ dataStep4, setDataStep4 ] = useState ({
        street: "",
        city: "",
        zipcode: "",
        phone: "",
        date: "",
        time: "",
        misc: ""
    })
    const [ currentStep, setCurrentStep] = useState (1);


//updating states in form
    const handleChangeStep1 = (e) => {
        setDataStep1(e.target.value);
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
        const { name, checked } = e.target;
        setDataStep3Check((prevDataStep3CheckState) => ({
            ...prevDataStep3CheckState,
            [name]: checked
        }));
    }

    const handleChangeStep4 = (e) => {
        const { name, value } = e.target;
        setDataStep4((prevDataStep4State) => ({
            ...prevDataStep4State,
            [name]: value
        }));
    }

//moving to the last page, sending data to the server, cleaning states
    const handleSubmit = (e) => {
        setCurrentStep (prevCurrentStep => prevCurrentStep + 1);

        e.preventDefault()
        addDoc(collection(db, "forms"), {
            step1: dataStep1,
            step2: dataStep2,
            step3city: dataStep3.select,
            step3receiver: dataStep3Check,
            step3userReceiver: dataStep3.text,
            step4street: dataStep4.street,
            step4city: dataStep4.city,
            step4zipcode: dataStep4.zipcode,
            step4phone: dataStep4.phone,
            step4date: dataStep4.date,
            step4time: dataStep4.time,
            step4misc: dataStep4.misc

        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        }).catch((error) => {
            console.error("Error adding document: ",error);
        });

        setDataStep1('');
        setDataStep2('—wybierz—');
        setDataStep3({
            select: "-wybierz-",
            text: ""
        });
        //TODO: refator, extrat to one global variable: step3InitialValue
        setDataStep3Check({
            kids: false,
            singleMoms: false,
            homeless: false,
            disabled: false,
            elderly: false
        });
        //TODO: refator, extrat to one global variable: step4InitialValue

        setDataStep4({
            street: "",
            city: "",
            zipcode: "",
            phone: "",
            date: "",
            hour: "",
            misc: ""
        });
    }

    //changing steps

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
                <Step4
                    currentStep={currentStep}
                    dataStep4={dataStep4}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChangeStep4={handleChangeStep4}/>
                <FormSummary
                    currentStep={currentStep}
                    dataStep1={dataStep1}
                    dataStep2={dataStep2}
                    dataStep3={dataStep3}
                    dataStep3Check={dataStep3Check}
                    dataStep4={dataStep4}
                    FormSummaryStep3CheckPresentation={FormSummaryStep3CheckPresentation}
                    prevStep={prevStep}
                    handleSubmit={handleSubmit}
                />
                <FormEnd
                    currentStep={currentStep}/>
            </form>
        </>
    )
}

export default GiveAwayForm;
