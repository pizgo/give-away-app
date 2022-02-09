import React, {useState} from 'react';
import Strings from "../../StringResources";


const Step3 = ({currentStep, dataStep3, dataStep3Check, handleChangeStep3, handleChangeStep3Check, nextStep, prevStep}) => {

    const [select2Error, setSelect2Error] = useState('');
    const [checkError, setCheckError] = useState('');

    function areDictElementsAllFalse(dict){
        for (const [key,value] of Object.entries(dict)){
            if (value) {
                return false;
            }
        }
        return true;
    }

    const validateAndNextStep = e => {
        e.preventDefault();

        let isAnyError = false;
        if (dataStep3.select === Strings.SelectOpening) {
            setSelect2Error(Strings.Errors.formChoiceError);
            isAnyError = true;
        }
        if (areDictElementsAllFalse(dataStep3Check)) {
            setCheckError(Strings.Errors.formChoiceError)
            isAnyError = true;
        }
        if (!isAnyError) {
            nextStep()
        }
    }

    const validateAndHandleChangeStep = (e) => {
        setSelect2Error();
        handleChangeStep3(e)
    }

    const validateAndHandleChangeStepCheck = (e) => {
        setCheckError();
        handleChangeStep3Check(e)
    }


    if (currentStep !== 3) {
        return null
    }

    else
        return (
            <>
                <div className="container">

                    <div className="form__header">
                        <h3 className="form__header-main">Ważne!</h3>
                        <p className="form__header-text">Jeśli wiesz, komu chcesz pomóc, możesz wpisać nazwę organizacji w wyszukiwarce. Możesz też filtrować organizacje po
                            ich lokalizacji lub celu ich pomocy.</p>
                    </div>

                    <div className="form__container">
                        <p className="form__stepNumber">Krok {currentStep}/4</p>
                        <div className="form__box">
                            <div className="select2__container">
                                <h3 className="form__text-header">Lokalizacja:</h3>
                                <div className='select2__container-error'>
                                    <div className="select2__box">
                                        <select className="select1__select" onChange={validateAndHandleChangeStep} name="select" value={dataStep3.select}>
                                            <option value={Strings.SelectOpening}>—wybierz—</option>
                                            <option value="Poznań">Poznań</option>
                                            <option value="Warszawa">Warszawa</option>
                                            <option value="Kraków">Kraków</option>
                                            <option value="Wrocław">Wrocław</option>
                                            <option value="Katowice">Katowice</option>
                                        </select>
                                        <span className="select1__arrow"/>
                                    </div>
                                    <p className='select2__error'>{select2Error}</p>
                                </div>

                            </div>
                            <p className="form__text-basicBold checkbox__header">Komu chcesz pomóc?</p>
                             <div className="checkbox__container">
                                <label className="checkbox__label">
                                <input onChange={validateAndHandleChangeStepCheck}
                                       type="checkbox"
                                       name="kids"
                                       checked={dataStep3Check.kids}/>
                                       <span className="checkbox__name">{Strings.Step3.choiceKids}</span>
                                </label>

                                <label className="checkbox__label">
                                <input onChange={validateAndHandleChangeStepCheck}
                                       type="checkbox"
                                       name="singleMoms"
                                       checked={dataStep3Check.singleMoms}/>
                                       <span className="checkbox__name">{Strings.Step3.choiceSingleMoms}</span>
                                </label>

                                <label className="checkbox__label">
                                <input onChange={validateAndHandleChangeStepCheck}
                                       type="checkbox"
                                       name="homeless"
                                       checked={dataStep3Check.homeless}/>
                                       <span className="checkbox__name">{Strings.Step3.choiceHomeless}</span>
                                </label>
                        </div>

                            <div className="checkbox__container">
                            <label className="checkbox__label">
                            <input onChange={validateAndHandleChangeStepCheck}
                                   type="checkbox"
                                   name="disabled"
                                   checked={dataStep3Check.disabled}/>
                                   <span className="checkbox__name">{Strings.Step3.choiceDisabled}</span>
                            </label>

                            <label className="checkbox__label">
                            <input onChange={validateAndHandleChangeStepCheck}
                                   type="checkbox"
                                   name="elderly"
                                   checked={dataStep3Check.elderly}/>
                                   <span className="checkbox__name">{Strings.Step3.choiceElderly}</span>
                            </label>
                        </div>
                            <p className='checkbox__error'>{checkError}</p>
                            <div className="textarea__container">
                            <p className="form__text-basicBold textarea__header">Wpisz nazwę konkretnej organizacji (opcjonalnie):</p>
                            <input className="textarea__field" onChange={validateAndHandleChangeStep}
                                   type="textarea" name="text"
                                   value={dataStep3.text}/>
                        </div>

                        </div>

                        <div className="form__buttons">
                            <button type="button" className="form__buttons-btn btn__prev" onClick={prevStep}>Wstecz</button>
                            <button type="button" className="form__buttons-btn btn__next" onClick={validateAndNextStep}>Dalej</button>
                        </div>
                </div>
                </div>

            </>
        )
}

export default Step3;
