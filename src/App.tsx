import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./On/OnOff";
import {UnControlAccordion} from "./UnControlAccordion/UnControlAccordion";
import {UnControlRating} from "./UnControlRating/UnControlRating";
import {Rating, RatingValueType} from "./Rating/Rating";
import {Accordion} from "./Accordion/Accordion";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className="App">
            <OnOff/>
            <UnControlAccordion titleValue={'Menu'}/>
            <UnControlAccordion titleValue={'Users'}/>
            <UnControlRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'MENU'} collapsed={true}/>

            {/*<OnOff on={false}/>
           <OnOff on={true}/>*/}
        </div>
    );
}

export default App;
