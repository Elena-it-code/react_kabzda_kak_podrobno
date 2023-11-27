import React from 'react';
import './App.css';
import {OnOff} from "./On/OnOff";
import {UnControlAccordion} from "./UnControlAccordion/UnControlAccordion";
import {UnControlRating} from "./UnControlRating/UnControlRating";


function App() {
    return (
        <div className="App">
           <OnOff />
            <UnControlAccordion titleValue={'Menu'}/>
            <UnControlAccordion titleValue={'Users'}/>
            <UnControlRating />

           {/*<OnOff on={false}/>
           <OnOff on={true}/>*/}
        </div>
    );
}

export default App;
