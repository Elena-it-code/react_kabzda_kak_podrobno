import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from "react";

/*const meta: Meta<typeof Accordion> = {
    component: Accordion,
};*/

//именно так и экспортируем наши компоненты по default

export default {
    title: 'Accordion',
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

const callbackHandler = action('accordion mode change event fired')
const onClickCallbackHandler = action('some item was clicked')

export const MenuCollapsedMode = () => {
    return <Accordion titleValue={'Menu'} collapsed={true} onChange={callbackHandler} items={[]} onClick={onClickCallbackHandler}/>
}

export const UsersUnCollapsedMode = () => {
    return (
        <Accordion titleValue={'Users'} collapsed={false} onChange={callbackHandler} items={[ {title:'Dimych', value: '1'}, {title:'Elena', value: '2'}, {title:'Valera', value: '3'}, {title:'Sveta', value: '4'} ]} onClick={onClickCallbackHandler}/>
    )
}

export const ModeChanging = () => {
    const [value, setValue] = useState(false)
    return (
        <Accordion titleValue={'Accordion'}
                   collapsed={value}
                   onChange={() => {setValue(!value)}}
                   items={[
                       {title:'Dimych', value: '1'},
                       {title:'Elena', value: '2'},
                       {title:'Valera', value: '3'},
                       {title:'Sveta', value: '4'}
                   ]}
                   /*onClick={onClickCallbackHandler}/>*/
                   onClick={(value)=>{alert(`User with ID ${value} should be HAPPY!!!`)}}/>
    )
}
