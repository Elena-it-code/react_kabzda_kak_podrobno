import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./On/OnOff";
import {UnControlAccordion} from "./UnControlAccordion/UnControlAccordion";
import {UnControlRating} from "./UnControlRating/UnControlRating";
import {Rating, RatingValueType} from "./Rating/Rating";
import {UnControlRating2} from "./UnControlRating2/UnControlRating2";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className="App">
            <OnOff/>
            <UnControlAccordion titleValue={'Menu'}/>
            <UnControlAccordion titleValue={'Users'}/>
            <UnControlRating/>
            <UnControlRating2/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<OnOff on={false}/>
           <OnOff on={true}/>*/}
        </div>
    );
}

export default App;
