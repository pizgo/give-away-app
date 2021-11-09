import React from 'react';



const FormSummary = ({currentStep, dataStep1, dataStep2, dataStep3, dataStep3Check, dataStep4, FormSummaryStep3CheckPresentation, nextStep}) => {

    if (currentStep !==5) {
        return null
    }

    let dataStep3CheckPresentation = FormSummaryStep3CheckPresentation(dataStep3Check);

    return (
        <>
            <p>podsumowanie twojej darowizny</p>
            <p>oddajesz</p>
            <p>{dataStep2} worki</p>
            <p>{dataStep1}</p>
            <p>{dataStep3CheckPresentation}</p>
            <p>dla lokalizacji {dataStep3.select}</p>


        </>
    )
}

export default FormSummary;
