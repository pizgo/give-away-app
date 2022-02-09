import React, {useState} from 'react';
import Strings from "../../StringResources";


const Step4 = ({currentStep, dataStep4, nextStep, prevStep, handleChangeStep4}) => {

    const [streetError, setStreetError] = useState('');
    const [cityError, setCityError] = useState('');
    const [zipError, setZipError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [dateError, setDateError] = useState('');
    const [timeError, setTimeError] = useState('');


    const validateAndNextStep = e => {
        e.preventDefault();

        let isAnyError = false;
        if (dataStep4.street === '') {
            setStreetError(Strings.Errors.formEmptyFieldError);
            isAnyError = true;
        }
        if (dataStep4.city === '') {
            setCityError(Strings.Errors.formEmptyFieldError);
            isAnyError = true;
        }
        if (!(/^\(?([0-9]{2})\)?[-]?([0-9]{3})$/.test(dataStep4.zipcode))) {
            setZipError(Strings.Errors.formZipError);
            isAnyError = true;
        }
        if (!(/^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(dataStep4.phone))) {
            setPhoneError(Strings.Errors.formPhoneError);
            isAnyError = true;
        }
        if (dataStep4.date === '') {
            setDateError(Strings.Errors.formEmptyFieldError);
            isAnyError = true;
        }
        if (dataStep4.time === '') {
            setTimeError(Strings.Errors.formEmptyFieldError);
            isAnyError = true;
        }
        if (!isAnyError) {
            nextStep()
        }
    }


    const HandleChangeStepAndClearErrorStreet = (e) => {
        setStreetError();
        handleChangeStep4(e)
    }
    const HandleChangeStepAndClearErrorCity = (e) => {
        setCityError();
        handleChangeStep4(e)
    }
    const HandleChangeStepAndClearErrorZip = (e) => {
        setZipError();
        handleChangeStep4(e)
    }
    const HandleChangeStepAndClearErrorPhone = (e) => {
        setPhoneError();
        handleChangeStep4(e)
    }
    const HandleChangeStepAndClearErrorDate = (e) => {
        setDateError();
        handleChangeStep4(e)
    }
    const HandleChangeStepAndClearErrorTime = (e) => {
        setTimeError();
        handleChangeStep4(e)
    }

    if (currentStep !==4) {
        return null
    }

    return (
        <div className='container'>

            <div className="form__header">
                <h3 className="form__header-main">Ważne!</h3>
                <p className="form__header-text">Podaj adres oraz termin odbioru rzeczy</p>
            </div>

            <div className='form__container'>
                <p className="form__stepNumber">Krok {currentStep}/4</p>
                <h3 className="form__text-header">Podaj adres oraz termin odbioru rzeczy:</h3>
                <div className='form__boxes'>
                    <div className='box1'>
                        <div className='box1__title'>Adres odbioru:</div>
                        <div className='box1__box'>
                            <div className='box1__element'>
                                <p className='box1__name'>Ulica</p>
                                <input className='box1__field' onChange={HandleChangeStepAndClearErrorStreet}
                                       type="textarea" name="street"
                                       value={dataStep4.street}/>
                            </div>
                            <p className='step4__error'>{streetError}</p>
                        </div>
                        <div className='box1__box'>
                            <div className='box1__element'>
                                <p className='box1__name'>Miasto</p>
                                <input className='box1__field' onChange={HandleChangeStepAndClearErrorCity}
                                       type="textarea" name="city"
                                       value={dataStep4.city}/>
                            </div>
                            <p className='step4__error'>{cityError}</p>
                        </div>
                        <div className='box1__box'>
                            <div className='box1__element'>
                                <p className='box1__name'>Kod <br/>pocztowy</p>
                                <input className='box1__field' onChange={HandleChangeStepAndClearErrorZip}
                                       type="textarea" name="zipcode"
                                       value={dataStep4.zipcode}/>
                            </div>
                            <p className='step4__error'>{zipError}</p>
                        </div>
                        <div className='box1__box'>
                            <div className='box1__element'>
                                <p className='box1__name'>Numer <br/>telefonu</p>
                                <input className='box1__field' onChange={HandleChangeStepAndClearErrorPhone}
                                       type="textarea" name="phone"
                                       value={dataStep4.phone}/>

                            </div>
                            <p className='step4__error'>{phoneError}</p>
                        </div>
                    </div>

                    <div className='box1'>
                        <div className='box1__title'>Termin odbioru:</div>
                        <div className='box1__box'>
                            <div className='box1__element'>
                                <p className='box1__name'>Data</p>
                                <input className='box1__field' type='date'
                                                         name='date'
                                                         min='2019-01-01'
                                                         max='2022-12-31'
                                                         value={dataStep4.date}
                                                         onChange={HandleChangeStepAndClearErrorDate}/>
                            </div>
                            <p className='step4__error'>{dateError}</p>
                        </div>
                        <div className='box1__box'>
                            <div className='box1__element'>
                                <p className='box1__name'>Godzina</p>
                                <input className='box1__field' onChange={HandleChangeStepAndClearErrorTime}
                                       type='time'
                                       name='time'
                                       value={dataStep4.time}/>
                            </div>
                            <p className='step4__error'>{timeError}</p>
                        </div>
                        <div className='box1__element'>
                            <p className='box1__name'>Uwagi <br/> dla kuriera</p>
                            <input className='box1__field' onChange={handleChangeStep4}
                                   type="textarea" name="misc"
                                   value={dataStep4.misc}/>
                        </div>
                    </div>


                </div>
                <div className="form__buttons">
                    <button type="button" className="form__buttons-btn btn__prev" onClick={prevStep}>Wstecz</button>
                    <button type="button" className="form__buttons-btn btn__next" onClick={validateAndNextStep}>Dalej</button>
                </div>
            </div>
        </div>
    )

}

export default Step4;