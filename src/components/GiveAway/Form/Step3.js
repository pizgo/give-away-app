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

                    <section className="form__header">
                        <img src={BackgroundForm} alt="" className="form__img"/>
                        <h3 className="form__header-main">Ważne!</h3>
                        <p className="form__header-text">Jeśli wiesz, komu chcesz pomóc, możesz wpisać nazwę organizacji w wyszukiwarce. Możesz też filtrować organizacje po
                            ich lokalizacji lub celu ich pomocy.</p>
                    </section>

                    <div className="form__container">
                        <p className="form__stepNumber">Krok {currentStep}/4</p>
                        <div className="form__box">
                            <div className="select2__container">
                                <label className="form__text-basicBold select2__label">Lokalizacja:</label>
                                <div className="select1__box">
                                    <select className="select1__select" onChange={handleChangeStep3} name="select" value={dataStep3.select}>
                                        <option value="Poznań">Poznań</option>
                                        <option value="Warszawa">Warszawa</option>
                                        <option value="Kraków">Kraków</option>
                                        <option value="Wrocław">Wrocław</option>
                                        <option value="Katowice">Katowice</option>
                                    </select>
                                    <span className="select1__arrow"/>
                                </div>
                            </div>
                        <div className="checkbox__container">
                            <p className="form__text-basic checkbox__header">Komu chcesz pomóc?</p>
                        {/*<p>Checkbox value is {dataStep3Check ? "true" : "false" }</p>*/}

                        <label>dzieciom</label>
                        <input onChange={handleChangeStep3Check}
                               type="checkbox"
                               name="kids"
                               checked={dataStep3Check.kids}/>

                        <label>samotnym matkom</label>
                        <input onChange={handleChangeStep3Check}
                               type="checkbox"
                               name="singleMoms"
                               checked={dataStep3Check.singleMoms}/>

                        <label>bezdomnym</label>
                        <input onChange={handleChangeStep3Check}
                               type="checkbox"
                               name="homeless"
                               checked={dataStep3Check.homeless}/>

                        <label>niepełnosprawnym</label>
                        <input onChange={handleChangeStep3Check}
                               type="checkbox"
                               name="disabled"
                               checked={dataStep3Check.disabled}/>

                        <label>osobom starszym</label>
                        <input onChange={handleChangeStep3Check}
                               type="checkbox"
                               name="elderly"
                               checked={dataStep3Check.elderly}/>
                        </div>

                        <div className="textarea__container">
                            <p className="form__text-basic textarea__header">Wpisz nazwę konkretnej organizacji (opcjonalnie):</p>
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
