// step1checkbox1: false
// step1checkbox2: false,
// step1checkbox3: false,
// step1checkbox4: false,
// step1checkbox5: false,
// step2bag_sel: "-wybierz-",
// step3localization_sel: "-wybierz-",
// step3chbKids: false,
// step3checkbox2: false,
// step3checkbox3: false,
// step3checkbox4: false,
// step3checkbox5: false,
// step3textarea: "",
// step4street: "",
// step4city: "",
// step4zipcode: "",
// step4phone: "",
// step4data: "",
// step4time: "",
// step4note: ""


import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import FormSummary from "./FormSummary";
import FormEnd from "./FormEnd";

return (
    <>
        <form>
            <label>Ubrania</label>
            <input onChange={handleChange}  type="checkbox" name="name" value={userData.checkbox1}/>
            <label>Zabawki</label>
            <input onChange={handleChange}  type="checkbox" name="name" value={userData.checkbox2}/>
        </form>


        <Step2/>
        <Step3/>
        <Step4/>
        <FormSummary/>
        <FormEnd/>
    </>
)