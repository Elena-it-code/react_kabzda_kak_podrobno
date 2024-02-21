import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select
}

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


export function WithValue (props: SelectPropsType) {
    const [value, setValue]= useState('2')
    return (
        <Select value={value} // мы контролируем эту компоненту, её value своим кодом из стейта value
                onChange={setValue} // засовывеам эту функцию, чтобы в этот setValue было запиано значение которое станет нашим значением снаружи
                items={ [
                    {value: '1', title: 'California' },
                    { value: '2', title: 'Virginia'},
                    { value: '3', title: 'Texas'},
                    { value: '4', title: 'Georgia'}
                ] }/>
    )
}

export function WithoutValue (props: SelectPropsType) {

    const [value, setValue]= useState(null)

    return (
        <Select value={value}
                onChange={setValue} // засовывеам эту функцию, чтобы в этот setValue было запиано значение которое станет нашим значением снаружи
                items={[
                    {value: '1', title: 'California' },
                    { value: '2', title: 'Virginia'},
                    { value: '3', title: 'Texas'},
                    { value: '4', title: 'Georgia'}
                ]}/>
    )
}
