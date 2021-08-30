import React, {useState} from 'react';

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import FormSummary from "./FormSummary";
import FormEnd from "./FormEnd";


const GiveAwayForm = () => {

    const [userData, setUserData] = useState






    return (
        <>
            <Step1/>
            <Step2/>
            <Step3/>
            <Step4/>
            <FormSummary/>
            <FormEnd/>
        </>
    )
}

export default GiveAwayForm;
