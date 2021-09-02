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
                <input onChange={handleChangeStep2}  type="select" name="name" value={dataStep2.select}/>
                    <option value="1">1</option>
                    <option value="2">3</option>
                    <option value="3">3</option>
                    <option value="4">4</option>





                <button type="button" onClick={prevStep}>Wstecz</button>
                <button type="button" onClick={nextStep}>Dalej</button>

            </>
        )
}

export default Step2;
