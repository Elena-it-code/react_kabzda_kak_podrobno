import {action} from '@storybook/addon-actions';

import {OnOff} from './OnOff';
import React, {useState} from "react";

/*const meta: Meta<typeof Accordion> = {
    component: Accordion,
};*/

//именно так и экспортируем наши компоненты по default
export default {
    component: OnOff
}

export const onMode =()=>{
    return (
        <OnOff on={true} onChange={x=>x}/>
    )
}

export const offMode =()=>{
    return (
        <OnOff on={false} onChange={()=>{}}/>
    )
}

export const ModeChanging =()=>{
    const [value, setValue]=useState(true)
    return <OnOff on={value} onChange={setValue}/>
}