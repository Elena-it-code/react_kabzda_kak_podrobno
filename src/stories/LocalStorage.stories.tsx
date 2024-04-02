import React, {useEffect, useState} from "react";


export default {
    title: 'LocalStorage demo',
}

export const SimpleExampleCounter = () => {
    const [value, setValue] = useState(0)
    console.log("SimpleExampleCounter")

    const incHandler = () => {
        console.log("incHandler")
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => { // записываем значение из LocalStorage

        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue2', JSON.stringify(value + 1))
    }

    const getFromToLocalStorageHandler = () => { // получаем значение из LocalStorage

        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    const clearLocalStorageHandler = () => { // очищение LocalStorage
        localStorage.clear() // зачищаем.
        setValue(0) // устанавливаем, то значение, которое  мы хотим, чтоб было при занулении
    }

    const removeItemFromLocalStorageHandler = () => { // очищение LocalStorage
        localStorage.removeItem('counterValue2') // зачищаем выборочно, указывая key того значения, которое хотим удалить.
    }

    return <>
        <div>
            <h1>{value}</h1>
        </div>
        <button onClick={incHandler}>Inc</button>
        <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
        <button onClick={getFromToLocalStorageHandler}>getFromToLocalStorage</button>
        <button onClick={clearLocalStorageHandler}>clearLocalStorageHandler</button>
        <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorageHandler</button>
    </>
}

// ЗАПИСЫВАЕМ ЗНАЧЕНИЕ в localStorage.setItem()  :
// localStorage.setItem('counterValue', JSON.stringify(value))
//
// Записываеи таким образом. Через setItem. ('key', 'значение').
// key придумываем сами, значение берем то, которое нам надо записать.
// 1 СПОСОБ:
// value.toString() // можно записать через value.toString()
// преобразование в строку. Т.к. setItem принимает параметры как string
// 2 СПОСОБ:
// JSON.stringify(value) - stringify преобразует ЛЮБОЕ значение в строку.
// В нашем случае то знчание, которое мы передаем (value)
// JSON - это строгий формат типизации. ("name" : "Igor"), как наш файл package.json


// ПОЛУЧАЕМ ЗНАЧЕНИЕ из LocalStorage.getItem()  :
// let valueAsString = localStorage.getItem('counterValue')    // используем этот же ключ, что и сетали в localStorage.setItem
// if (valueAsString){                                        // проверка на существование этой строки.
// "valueAsString" это псевдоложь или псевдоистина,
// это псведоложь, значиь true,
// соответсвенно выполняется код ниже
//     let newValue = JSON.parse(valueAsString)              // преобразование из строки в number
//     setValue(newValue)                                   // сетаем в стэйт наш

// JSON.parse - парсит в тот тип, который нам необходим. В данном примере. String в number.
// НАПРИМЕР: Было строка "16" получаем число 16.

// localStorage.clear() - зачищает все значения. У нас их может быть много.
