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

const callback =action('on or off clicked')

export const onMode =()=>{
    return (
        <OnOff on={true} onChange={callback}/>
    )
}

export const offMode =()=>{
    return (
        <OnOff on={false} onChange={callback}/>
    )
}

export const ModeChanging =()=>{
    const [value, setValue]=useState(true)
    return <OnOff on={value} onChange={setValue}/>
}