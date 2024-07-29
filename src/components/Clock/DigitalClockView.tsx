import React from "react";
import {ClockViewPropsType} from "./Clock";


export const get2digitalString = (number: number) => number < 10 ? "0" + number : number

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <> <span>{get2digitalString(date.getHours())}</span>
            :
            <span>{get2digitalString(date.getMinutes())}</span>
            :
            <span>{get2digitalString(date.getSeconds())}</span>
        </>)
}