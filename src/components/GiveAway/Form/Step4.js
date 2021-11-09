import React, {useState} from 'react';



const Step4 = ({currentStep, dataStep4, nextStep, prevStep, handleChangeStep4}) => {

    if (currentStep !==4) {
        return null
    }

    return (
        <div>
            <div>
                <p>Ważne!<br/>Podaj adres oraz termin odbioru rzeczy</p>
            </div>
            <div>
                <div>Krok 4/4</div>
                <div>
                    <p>Podaj adres oraz termin odbioru rzeczy przez kuriera</p>
                </div>
                <div>
                    <div>
                        <p>Adres odbioru</p>
                        <div>
                            <p>Ulica</p>
                            <input onChange={handleChangeStep4}
                                   type="textarea" name="street"
                                   value={dataStep4.street}/>
                        </div>
                        <div>
                            <p>Miasto</p>
                            <input onChange={handleChangeStep4}
                                   type="textarea" name="city"
                                   value={dataStep4.city}/>
                        </div>
                        <div>
                            <p>Kod pocztowy</p>
                            <input onChange={handleChangeStep4}
                                   type="textarea" name="zipcode"
                                   value={dataStep4.zipcode}/>
                        </div>
                        <div>
                            <p>Numer telefonu</p>
                            <input onChange={handleChangeStep4}
                                   type="textarea" name="phone"
                                   value={dataStep4.phone}/>
                        </div>
                    </div>
                    <div>
                        <p>Termin odbioru</p>
                        <div>
                            <p>Data</p>
                            <input
                                type='date'
                                name='date'
                                min='2019-01-01'
                                max='2022-12-31'
                                value={dataStep4.date}
                                onChange={handleChangeStep4}
                            />
                        </div>
                        <div>
                            <p>Godzina</p>
                            <input
                                type='time'
                                name='time'
                                value={dataStep4.time}
                            />
                        </div>
                        <div>
                            <p>Uwagi dla kuriera</p>
                            <input onChange={handleChangeStep4}
                                   type="textarea" name="misc"
                                   value={dataStep4.misc}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" onClick={prevStep}>Wstecz</button>
                <button type="button" onClick={nextStep}>Dalej</button>
            </div>

        </div>

    )

}

export default Step4;