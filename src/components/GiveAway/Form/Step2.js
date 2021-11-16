import React from 'react';
import BackgroundForm from "../../../assets/BackgroundForm.jpg";



const Step2 = ({currentStep, dataStep2, handleChangeStep2, nextStep, prevStep}) => {

    if (currentStep !==2) {
        return null
    }

    else
        return (
            <div className="container">

                <section className="form__header">
                    <img src={BackgroundForm} alt="" className="form__img"/>
                    <h3 className="form__header-main">Ważne!</h3>
                    <p className="form__header-text">Wszystkie rzeczy w 60litrowe worki. Dokładną instrukcję jak poprawnie
                        spakować rzeczy znajdzies TUTAJ.</p>
                </section>

                <div className="form__container">
                    <p className="form__stepNumber">Krok {currentStep}/4</p>
                    {/*<h3 className="form__text-header">Podaj liczbę 60l worków, w które spakowałaś rzeczy:</h3>*/}
                    <div className="form__box">
                        <div className="select1__container">
                            <label className="form__text-basic select1__label">
                                Liczba 60l worków:</label>
                                <div className="select1__box">
                                    <select className="select1__select" onChange={handleChangeStep2} defaultValue={dataStep2}>
                                                 <option value="0">—wybierz—</option>
                                                 <option value="1">1</option>
                                                 <option value="2">2</option>
                                                 <option value="3">3</option>
                                                 <option value="4">4</option>
                                                 <option value="5">5</option>
                                             </select>
                                        <span className="select1__arrow"/>
                                </div>
                            {/*<p>wartość to {dataStep2}</p>*/}
                        </div>
                    </div>
                    <div className="form__buttons">
                        <button type="button" className="form__buttons-btn btn__prev" onClick={prevStep}>Wstecz</button>
                        <button type="button" className="form__buttons-btn btn__next" onClick={nextStep}>Dalej</button>
                    </div>
                </div>
            </div>


        )
}

export default Step2;