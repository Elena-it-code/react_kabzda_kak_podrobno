import React, {useMemo, useState} from "react";


export default {
    title: 'UseState demo',
}



function generateData () {
    // difficult counting
    console.log('generateData')
    return 4847633949;
}

export const Example1 = ()=> {
    console.log("Example1")
    // useState в качестве инициализационного значения функцию не умеет запоминать её. Он её выполнит. И то что return(ет)
    // функция, то он и запомнит в качестве инициализационного значения/стартового.
    // И React сделает это всего лишь один раз. Он вычислит это тяжелое значение 4847633949. И сохранит его как единственное
    // значение в старотовое/initial значение useState(4847633949)
    // таким образом мы оптимизировали useState, при помощи передачи в него функции. Результат которой он и запомнит как старотовое значение.
    // ВАЖНО: использовать такую реализацию, если у нас есть тяжелые вычисления и он занимает какое-то время.

    const [counter, setCounter] = useState(generateData); // [4847633949, function(newValue){}]

    return <>
        <button onClick={()=> {setCounter(counter+1)}}>+</button>
        {counter}
    </>
}



export const Example2WithUseMemo = ()=> {
    console.log("Example2WithUseMemo")

    const initValue = useMemo(generateData, [])
    // useMemo вызовет эту функцию, получит результат число 4847633949 и запомнит. Сделает всего лишь это один раз.
    // таким образом мы не запустим повторно генерацию этого числа. f generateData ()
    // таким образом мы оптимизировали useState, при помощи hook(а) useMemo. Заюзали его.
    // НО ЭТО НЕ ХОРОШАЯ ПРАКТИКА. ПОСКОЛЬКУ ПРИШЛОСЬ ИСПОЛЬЗОВАТЬ hook useMemo()

    const [counter, setCounter] = useState(initValue); // [4847633949, function(newValue){}]

    return <>
        <button onClick={()=> {setCounter(counter+1)}}>+</button>
        {counter}
    </>
}

export const Example2 = ()=> {
    console.log("Example2")
    // фунуция, которая выкидывается из useState(a), может принимать не значения, а какую-то changer f-ю изменитель changer,
    // которая по каким-то стандартным правилам, каждый раз изменяет state
    // для счетчика это идеальный вариант

    const [counter, setCounter] = useState(generateData); // [4847633949, function(newValue){}]

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={()=> {setCounter(changer)}}>+</button>
        {counter}
    </>
}



// Example2_ этот же пример, что и Example2 та же логика. ИДЕНТИЧНЫЕ
// НО! ЗАПИСЬ В ОДНУ СТРОКУ, сразу без объявления функции changer:
export const Example2_ = ()=> {
    console.log("Example2")
    const [counter, setCounter] = useState(generateData); // [4847633949, function(newValue){}]

    return <>
        <button onClick={()=> {setCounter(state => state + 1)}}>+</button>
        {counter}
    </>
}