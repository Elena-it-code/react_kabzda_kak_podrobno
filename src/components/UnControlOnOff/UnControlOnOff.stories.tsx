import {action} from '@storybook/addon-actions';

import {UnControlOnOff} from './UnControlOnOff';
import React from "react";

/*const meta: Meta<typeof Accordion> = {
    component: Accordion,
};*/

//именно так и экспортируем наши компоненты по default
export default {
    title: 'UnControlOnOff',
    component: UnControlOnOff
}

const callback =action('on or off clicked')

export const OnMode = ()=> <UnControlOnOff defaultOn={true} onChange={callback}/>
export const OffMode = ()=> <UnControlOnOff defaultOff={false} onChange={callback}/>