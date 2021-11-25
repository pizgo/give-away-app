import React from 'react';
import Decoration from "../../../assets/Decoration.svg";
import BackgroundForm from "../../../assets/BackgroundForm.jpg";



const FormEnd = ({currentStep, dataStep1, dataStep2, dataStep3, dataStep3Check,
                     dataStep4, FormSummaryStep3CheckPresentation, nextStep, prevStep}) => {

    if (currentStep !== 6) {
        return null
    }

    console.log({dataStep1})

    return (
        <>
            <div className='container'>
                <div className='end__container'>
                    <img src={BackgroundForm} alt="" className="end__background"/>
                    <div className='end__box'>
                        <p className='end__text'>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje
                            o odbiorze</p>
                        <img src={Decoration} alt="" className="end__img"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormEnd;
