import {action} from '@storybook/addon-actions';

import {UnControlAccordion} from './UnControlAccordion';
import React from "react";

//именно так и экспортируем наши компоненты по default
export default {
    title: 'UnControlAccordion',
    component: UnControlAccordion
}


export const AccordionDemo = () => {
    return (
        <UnControlAccordion titleValue={'Accordion'}/>
    )
}
