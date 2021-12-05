import React, {useState} from 'react';
import BackgroundForm from "../../../assets/BackgroundForm.jpg";
import validator from "validator";



const Step4 = ({currentStep, dataStep4, nextStep, prevStep, handleChangeStep4}) => {

    const [fieldError, setFieldError] = useState('');


    const validateAndNextStep = e => {
        e.preventDefault();
        let isError = false;
        if (dataStep4.street === '') {
            setFieldError("Pole nie może być puste");
            isError = true;
        }

        if (dataStep4.city === '') {
            setFieldError("Pole nie może być puste");
            isError = true;
        }

        if (!isError) {
            nextStep()
        }
    }



    if (currentStep !==4) {
        return null
    }

    return (
        <div className='container'>

            <div className="form__header">
                <img src={BackgroundForm} alt="" className="form__img"/>
                <h3 className="form__header-main">Ważne!</h3>
                <p className="form__header-text">Podaj adres oraz termin odbioru rzeczy</p>
            </div>

            <div className='form__container'>
                <p className="form__stepNumber">Krok {currentStep}/4</p>
                <h3 className="form__text-header">Podaj adres oraz termin odbioru rzeczy:</h3>
                <div className='form__boxes'>
                    <div className='box1'>
                        <div className='box1__title'>Adres odbioru:</div>
                        <div className='box1__element'>
                            <p className='box1__name'>Ulica</p>
                            <input className='box1__field' onChange={handleChangeStep4}
                                   type="textarea" name="street"
                                   value={dataStep4.street}/>
                            <p>{fieldError}</p>
                        </div>
                        <div className='box1__element'>
                            <p className='box1__name'>Miasto</p>
                            <input className='box1__field' onChange={handleChangeStep4}
                                   type="textarea" name="city"
                                   value={dataStep4.city}/>
                            <p>{fieldError}</p>
                        </div>
                        <div className='box1__element'>
                            <p className='box1__name'>Kod <br/>pocztowy</p>
                            <input className='box1__field' onChange={handleChangeStep4}
                                   type="textarea" name="zipcode"
                                   value={dataStep4.zipcode}/>
                        </div>
                        <div className='box1__element'>
                            <p className='box1__name'>Numer <br/>telefonu</p>
                            <input className='box1__field' onChange={handleChangeStep4}
                                   type="textarea" name="phone"
                                   value={dataStep4.phone}/>
                        </div>
                    </div>

                    <div className='box1'>
                        <div className='box1__title'>Termin odbioru:</div>
                        <div className='box1__element'>
                            <p className='box1__name'>Data</p>
                            <input className='box1__field' type='date'
                                                     name='date'
                                                     min='2019-01-01'
                                                     max='2022-12-31'
                                                     value={dataStep4.date}
                                                     onChange={handleChangeStep4}/>
                        </div>
                        <div className='box1__element'>
                            <p className='box1__name'>Godzina</p>
                            <input className='box1__field' onChange={handleChangeStep4}
                                   type='time'
                                   name='time'
                                   value={dataStep4.time}/>
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