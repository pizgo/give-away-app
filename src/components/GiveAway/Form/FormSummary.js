import React from 'react';
import Icon1 from "../../../assets/Icon1.svg";
import Icon4 from "../../../assets/Icon4.svg";
import BackgroundForm from "../../../assets/BackgroundForm.jpg";



const FormSummary = ({currentStep, dataStep1, dataStep2, dataStep3, dataStep3Check,
                         dataStep4, FormSummaryStep3CheckPresentation, nextStep, prevStep, handleSubmit}) => {

    if (currentStep !==5) {
        return null
    }

    let dataStep3CheckPresentation = FormSummaryStep3CheckPresentation(dataStep3Check);


    return (
        <div className='container'>
            <div className='summary__container'>
                <h3 className="form__text-header">Podsumowanie Twojej darowizny</h3>
                <div className="summary__box1">
                    <p className='form__text-basicBold'>Oddajesz:</p>
                    <div className='summary__box1-element'>
                        <img src={Icon1} alt="" className="summary__box1-img"/>
                        <p className='summary__text'> {dataStep2} worki, {dataStep1}, {dataStep3CheckPresentation.join(",")}
                            {dataStep3.text}</p>
                    </div>
                    <div className='summary__box1-element'>
                        <img src={Icon4} alt="" className="summary__box1-img"/>
                        <p className='summary__text'>dla lokalizacji: {dataStep3.select}</p>
                    </div>
                </div>

                <div className='summary__box2'>
                        <div className='summary__box2-box'>
                            <div className='form__text-basicBold summary__box2-elementTitle'>Adres odbioru:</div>
                            <div className='summary__box2-element'>
                                <p className='form__text-basic summary__box2-elementName'>Ulica</p>
                                <p className='form__text-basic summary__text'>{dataStep4.street}</p>
                            </div>
                            <div className='summary__box2-element'>
                                <p className='form__text-basic summary__box2-elementName'>Miasto</p>
                                <p className='form__text-basic summary__text'>{dataStep4.city}</p>
                            </div>
                            <div className='summary__box2-element'>
                                <p className='form__text-basic summary__box2-elementName'>Kod<br/>pocztowy</p>
                                <p className='form__text-basic summary__text'>{dataStep4.zipcode}</p>
                            </div>
                            <div className='summary__box2-element'>
                                <p className='form__text-basic summary__box2-elementName'>Numer<br/>telefonu</p>
                                <p className='form__text-basic summary__text'>{dataStep4.phone}</p>
                            </div>
                        </div>

                        <div className='summary__box2-box'>
                            <div className='form__text-basicBold summary__box2-elementTitle'>Termin odbioru:</div>
                            <div className='summary__box2-element summary__box2-elementTitle'>
                                <p className='form__text-basic summary__box2-elementName'>Data</p>
                                <p className='form__text-basic summary__text'>{dataStep4.date}</p>
                            </div>
                            <div className='summary__box2-element'>
                                <p className='form__text-basic summary__box2-elementName'>Godzina</p>
                                <p className='form__text-basic summary__text'>{dataStep4.time}</p>
                            </div>
                            <div className='summary__box2-element'>
                                <p className='form__text-basic summary__box2-elementName'>Uwagi<br/>dla kuriera</p>
                                <p className='form__text-basic summary__text'>{dataStep4.misc}</p>
                            </div>
                        </div>
                </div>

                <div className="form__buttons">
                    <button type="button" className="form__buttons-btn btn__prev" onClick={prevStep}>Wstecz</button>
                    <button type="button" className="form__buttons-btn btn__next" onClick={handleSubmit}>Potwierdzam</button>
                </div>
            </div>
        </div>




    )
}

export default FormSummary;
