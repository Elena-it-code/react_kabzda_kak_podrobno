import {action} from '@storybook/addon-actions';

import {UnControlAccordion} from './UnControlAccordion';
import React from "react";

//именно так и экспортируем наши компоненты по default
export default {
    component: UnControlAccordion
}


const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <UnControlAccordion titleValue={'Collapsed Accordion'}/>

}

export const OpenedAccordion = () => {
    return (
        <UnControlAccordion titleValue={'Opened Accordion'}/>
    )
}

export const AccordionDemo = () => {
    return (
        <UnControlAccordion titleValue={'Accordion'}/>
    )
}
