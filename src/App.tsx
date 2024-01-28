import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlAccordion} from "./components/UnControlAccordion/UnControlAccordion";
import {UnControlRating} from "./components/UnControlRating/UnControlRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {UnControlOnOff} from "./components/UnControlOnOff/UnControlOnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed]= useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false); // hook

    return (
        <div className="App">
            <UnControlOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UnControlAccordion titleValue={'Menu'}/>
            <UnControlAccordion titleValue={'Users'}/>
            <UnControlRating defaultValue={ratingValue} onChange={value => value}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'MENU'} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)} items={[ {title:'Dimych', value: '1'}, {title:'Elena', value: '2'}, {title:'Valera', value: '3'}, {title:'Sveta', value: '4'} ]} onClick={()=>{}}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>

            {/*<OnOff on={false}/>
           <OnOff on={true}/>*/}
        </div>
    );
}

export default App;
