import {action} from '@storybook/addon-actions';
import React, {ChangeEvent, ChangeEventHandler, HTMLInputTypeAttribute, useRef, useState} from "react";


/*const meta: Meta<typeof Accordion> = {
    component: Accordion,
};*/

//именно так и экспортируем наши компоненты по default
export default {
    title: 'Input',
    //component: input
}

export const UnControlledInput = () => <input/>
export const TrackValueOfUnControlledInput = () => {

    const [value, setValue] = useState('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }
    return <> <input onChange={ onChangeHandler } /> - {value} </>;
}


export const GetValueOfUnControlledInputByButtonPress = () => {

    const [value, setValue] = useState('');
    //правильно использовать хук useRef через ссылку получить значение элемента value
    const inputRef = useRef<HTMLInputElement>(null);

    const saveHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputRef} /> <button onClick={saveHandler}> save</button> - actual value: {value} </>

    //такой способ нарушение принципов React, когда мы напрямую обращаемся через document.getElementById к настоящим dom-элементам
    /* return <> <input id={'inputId'}/> <button onClick={ (e)=>{
         const el = document.getElementById("inputId") as HTMLInputElement

         setValue(el.value)
     }  }> save </button> - actual value: {value} </>;*/

}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>