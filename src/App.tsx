import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./On/OnOff";
import {UnControlAccordion} from "./UnControlAccordion/UnControlAccordion";
import {UnControlRating} from "./UnControlRating/UnControlRating";
import {Rating, RatingValueType} from "./Rating/Rating";
import {Accordion} from "./Accordion/Accordion";
import {UnControlOnOff} from "./On/UnControlOnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed]= useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false); // hook

    return (
        <div className="App">
            <UnControlOnOff/>
            <UnControlAccordion titleValue={'Menu'}/>
            <UnControlAccordion titleValue={'Users'}/>
            <UnControlRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'MENU'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <OnOff on={switchOn} onChange={(on)=>setSwitchOn(on)}/>

            {/*<OnOff on={false}/>
           <OnOff on={true}/>*/}
        </div>
    );
}

export default App;
