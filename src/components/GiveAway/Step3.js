import React from 'react';

//sprawdzić, czy da się wrzucić wszystkie trzy inputy w jeden state
//i zrobić dwie funkcje do handlowania zmian (osobno target.valu, osobno target.checked)

const Step3 = ({currentStep, dataStep3, dataStep3Check, handleChangeStep3, handleChangeStep3Check, nextStep, prevStep}) => {

    if (currentStep !==3) {
        return null
    }

    else
        return (
            <>
                <div>
                    <p>Ważne! <br/>Jeśli wiesz, komu chcesz pomóc, możesz wpisać nazwę organizacji w wyszukiwarce. Możesz też filtrować organizacje po
                    ich lokalizacji lub celu ich pomocy </p>
                </div>
                <label>Lokalizacja</label>
                <p>Wybrany select to: {dataStep3.select}</p>
                <select onChange={handleChangeStep3} name="select" value={dataStep3.select}>
                    <option value="Poznań">Poznań</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Kraków">Kraków</option>
                    <option value="Wrocław">Wrocław</option>
                    <option value="Katowice">Katowice</option>
                </select>
                <p>Komu chcesz pomóc?</p>
                <p>Checkbox value is {dataStep3.isChecked ? "true" : "false" }</p>

                <label>dzieciom</label>
                <input onChange={handleChangeStep3Check}
                       type="checkbox"
                       name="isChecked"
                       checked={dataStep3.isChecked}/>

                <label>samotnym matkom</label>
                <input onChange={handleChangeStep3Check}
                       type="checkbox"
                       name="isChecked"
                       checked={dataStep3.isChecked}/>

                <label>bezdomnym</label>
                <input onChange={handleChangeStep3Check}
                       type="checkbox"
                       name="isChecked"
                       checked={dataStep3.isChecked}/>

                <label>niepełnosprawnym</label>
                <input onChange={handleChangeStep3Check}
                       type="checkbox"
                       name="isChecked"
                       checked={dataStep3.isChecked}/>

                <label>
                    <input onChange={handleChangeStep3Check}
                           type="checkbox"
                           name="isChecked"
                           checked={dataStep3.isChecked}/>
                    osobom starszym
                </label>

                <p>wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                <input onChange={handleChangeStep3}
                       type="textarea" name="text"
                       value={dataStep3.text}/>


                <button type="button" onClick={prevStep}>Wstecz</button>
                <button type="button" onClick={nextStep}>Dalej</button>

            </>
        )
}

export default Step3;
