import React from 'react';
import BackgroundForm from "../../../assets/BackgroundForm.jpg";

//sprawdzić, czy da się wrzucić wszystkie trzy inputy w jeden state
//i zrobić dwie funkcje do handlowania zmian (osobno target.valu, osobno target.checked)

const Step3 = ({currentStep, dataStep3, dataStep3Check, handleChangeStep3, handleChangeStep3Check, nextStep, prevStep}) => {

    console.log(dataStep3Check)

    if (currentStep !== 3) {
        return null
    }

    else
        return (
            <>
                <div className="container">

                    <div className="form__header">
                        <img src={BackgroundForm} alt="" className="form__img"/>
                        <h3 className="form__header-main">Ważne!</h3>
                        <p className="form__header-text">Jeśli wiesz, komu chcesz pomóc, możesz wpisać nazwę organizacji w wyszukiwarce. Możesz też filtrować organizacje po
                            ich lokalizacji lub celu ich pomocy.</p>
                    </div>

                    <div className="form__container">
                        <p className="form__stepNumber">Krok {currentStep}/4</p>
                        <div className="form__box">
                            <div className="select2__container">
                                <h3 className="form__text-header">Lokalizacja:</h3>
                                <div className="select1__box">
                                    <select className="select1__select" onChange={handleChangeStep3} name="select" value={dataStep3.select}>
                                        <option value="0">—wybierz—</option>
                                        <option value="Poznań">Poznań</option>
                                        <option value="Warszawa">Warszawa</option>
                                        <option value="Kraków">Kraków</option>
                                        <option value="Wrocław">Wrocław</option>
                                        <option value="Katowice">Katowice</option>
                                    </select>
                                    <span className="select1__arrow"/>
                                </div>
                            </div>
                            <p className="form__text-basicBold checkbox__header">Komu chcesz pomóc?</p>
                        <div className="checkbox__container">
                            <label className="checkbox__label">
                            <input onChange={handleChangeStep3Check}
                                   type="checkbox"
                                   name="kids"
                                   checked={dataStep3Check.kids}/>
                                   <span className="checkbox__name">dzieciom</span>
                            </label>

                            <label className="checkbox__label">
                            <input onChange={handleChangeStep3Check}
                                   type="checkbox"
                                   name="singleMoms"
                                   checked={dataStep3Check.singleMoms}/>
                                   <span className="checkbox__name">samotnym matkom</span>
                            </label>

                            <label className="checkbox__label">
                            <input onChange={handleChangeStep3Check}
                                   type="checkbox"
                                   name="homeless"
                                   checked={dataStep3Check.homeless}/>
                                   <span className="checkbox__name">bezdomnym</span>
                            </label>
                        </div>

                        <div className="checkbox__container">
                            <label className="checkbox__label">
                            <input onChange={handleChangeStep3Check}
                                   type="checkbox"
                                   name="disabled"
                                   checked={dataStep3Check.disabled}/>
                                   <span className="checkbox__name">niepełnosprawnym</span>
                            </label>

                            <label className="checkbox__label">
                            <input onChange={handleChangeStep3Check}
                                   type="checkbox"
                                   name="elderly"
                                   checked={dataStep3Check.elderly}/>
                                   <span className="checkbox__name">osobom starszym</span>
                            </label>
                        </div>
                        <div className="textarea__container">
                            <p className="form__text-basicBold textarea__header">Wpisz nazwę konkretnej organizacji (opcjonalnie):</p>
                            <input className="textarea__field" onChange={handleChangeStep3}
                                   type="textarea" name="text"
                                   value={dataStep3.text}/>
                        </div>
                        </div>

                        <div className="form__buttons">
                            <button type="button" className="form__buttons-btn btn__prev" onClick={prevStep}>Wstecz</button>
                            <button type="button" className="form__buttons-btn btn__next" onClick={nextStep}>Dalej</button>
                        </div>
                </div>
                </div>

            </>
        )
}

export default Step3;
