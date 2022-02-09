import React, {useState} from 'react';
import Strings from "../../StringResources";



const Step1 = ( {currentStep, dataStep1, handleChangeStep1, nextStep}) => {

    const [ radioError, setRadioError] = useState('');

    const validateAndNextStep1 = e => {
        e.preventDefault();
        if (dataStep1 === '') {
            setRadioError(Strings.Errors.formChoiceError);
        } else {
            setRadioError();
            nextStep();
        }
    }

    const validateAndHandleChangeStep1 = (e) => {
        setRadioError()
        handleChangeStep1(e)
    }

    if (currentStep !==1) {
        return null
    } else

        return (
        <div className="container">

            <div className="form__header">
                <h3 className="form__header-main">Ważne!</h3>
                <p className="form__header-text">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
                    będziemy wiedzieli, komu najlepiej je przekazać.</p>
            </div>

            <div className="background">
                <div className='form__container'>
                    <p className="form__stepNumber">Krok {currentStep}/4</p>
                    <h3 className="form__text-header">Zaznacz co chcesz oddać:</h3>
                    <div className="form__box">
                            <label className="form__text-basic radio__label">
                                <input
                                    onChange={validateAndHandleChangeStep1}
                                    type="radio"
                                    checked={dataStep1 === Strings.Step1.choiceClothesForReuse }
                                    value={Strings.Step1.choiceClothesForReuse}/>
                                {Strings.Step1.choiceClothesForReuse}
                            </label>
                            <label className="form__text-basic radio__label">
                                <input
                                    onChange={validateAndHandleChangeStep1}
                                    type="radio"
                                    checked={dataStep1 === Strings.Step1.choiceClothesForDiscard}
                                    value={Strings.Step1.choiceClothesForDiscard}/>
                                {Strings.Step1.choiceClothesForDiscard}
                            </label>
                            <label className="form__text-basic radio__label">
                                <input
                                    onChange={validateAndHandleChangeStep1}
                                    type="radio"
                                    checked={dataStep1 === Strings.Step1.choiceToys}
                                    value={Strings.Step1.choiceToys}/>
                                {Strings.Step1.choiceToys}
                            </label>
                            <label className="form__text-basic radio__label">
                                <input
                                    onChange={validateAndHandleChangeStep1}
                                    type="radio"
                                    checked={dataStep1 === Strings.Step1.choiceBooks}
                                    value={Strings.Step1.choiceBooks}/>
                                {Strings.Step1.choiceBooks}
                            </label>
                            <label className="form__text-basic radio__label" >
                                <input
                                    onChange={validateAndHandleChangeStep1}
                                    type="radio"
                                    checked={dataStep1 === Strings.Step1.choiceOther}
                                    value={Strings.Step1.choiceOther}/>
                                {Strings.Step1.choiceOther}
                            </label>
                        <p className='radio__error'>{radioError}</p>
                    </div>

                    <div className="form__buttons">
                        <button type="button" className="form__buttons-btn btn__next" onClick={validateAndNextStep1}>Dalej</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Step1;

