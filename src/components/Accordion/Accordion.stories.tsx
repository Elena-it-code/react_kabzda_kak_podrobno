import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from "react";

/*const meta: Meta<typeof Accordion> = {
    component: Accordion,
};*/

//именно так и экспортируем наши компоненты по default
export default {
    component: Accordion
}

//также один из способов создания истории и экспорта
/*export default meta;*/
// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
//     args: {
//         titleValue: 'bla',
//         collapsed: true
//     }
// }

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'}
                   collapsed={true}
                   onChange={onChangeHandler}/>

}

export const OpenedAccordion = () => {
    return (
        <Accordion titleValue={'Opened Accordion'}
                   collapsed={false}
                   onChange={onChangeHandler}/>
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Accordion titleValue={'Accordion'}
                   collapsed={collapsed}
                   onChange={() => {
                       setCollapsed(!collapsed)
                   }}/>
    )
}
