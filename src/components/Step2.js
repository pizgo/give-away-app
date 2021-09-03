import React from 'react';



const Step2 = ({currentStep, dataStep2, handleChangeStep2, nextStep, prevStep}) => {

    if (currentStep !==2) {
        return null
    }

    else
        return (
            <>
                <div>
                    <p>Ważne! <br/>Wszystkie rzeczy w 60litrowe worki. Dokładną instrukcję jak poprawnie
                    spakować rzeczy znajdzies TUTAJ</p>
                </div>
                <p>Podaj liczbę 60l worków, w które spakowałaś rzeczy</p>
                <label>Liczba 60l worków</label>
                <select onChange={handleChangeStep2} placeholder="--wybierz--" name="name" defaultValue={dataStep2}>
                    <option value="" disabled>-wybierz-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>





                <button type="button" onClick={prevStep}>Wstecz</button>
                <button type="button" onClick={nextStep}>Dalej</button>

            </>
        )
}

export default Step2;
