import React, {useEffect, useState} from "react";


export default {
    title: 'UseEffect demo',
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1); // [4847633949, function(newValue){}]

    console.log("SimpleExample")

    useEffect(() => {
        // изменение заголовка у документа
        document.title = counter.toString()
        console.log("useEffect every render ")
    }); // сработает каждый раз при рендере компоненты

    useEffect(() => {
        // изменение заголовка у документа
        document.title = counter.toString()
        console.log("useEffect only first render (componentDidMount)")

    }, []); // сработает один раз, в момент, когда компонента только вмонтировалась, в первый рендер

    useEffect(() => {
        // изменение заголовка у документа
        document.title = counter.toString()
        console.log("useEffect first render and every counter changed")

    }, [counter]); // сработает при первом рендере, и при изменении зависимости

    return <>
        Hello! {counter}
        <button onClick={()=> {setFake(fake+1)}}>fake +</button>
        <button onClick={()=> {setCounter(counter+1)}}>counter +</button>
    </>
}

// В useEffect() мы переадли callback f-ю ()=>{} , по сути эта callback функция и содержит
// какую-то лигику, которую можно назвать Effect(ом) или назвать sideEffect(ом)

// ЧТО ТАКОЕ sideEffect в React:
// api.getUser().then('') запрос на сервер
// setInterval - установка интервалов
// indexDB - обращение к базе данных
// document.getElement.Id - обращение к документу, нопрямую к DOM элементам, редко, но бывает
// document.title = " User " - изменение заголовка у документа
// и т.д. Т.е. любая асинхронщина. Делаем что-то "грязное" за рамками компоненты

// При каждой перерисовки компоненты, useEffect() будет отрабатывать
// ВАЖНЫЙ МОМЕНТ: сначала происходит отрисовка контента, потом только запускается useEffect()

// если мы в зависимость вообще не передали ничего, не пустой массив, а ВООБЩЕ НИЧЕГО useEffect(()=>{}),
// то мы каждый раз будем запускаться при рендере компоненты
// Если передали конкретную зависмость в useEffect( ()=>{}, deps: [counter]), то UseEffect() срабатывает первый раз,
// а потом при смене этой зависимости, как она изменилась, то и запустится наш UseEffect()

// Если мы передали пустой массив в зависмость в useEffect( ()=>{}, deps: []), то UseEffect() срабатывает один раз,
// при монтировании компоненты, её зарождении. При изменении компоненты он срабатывать больше не будет


export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log("SetTimeoutExample")

    useEffect(() => {

        setTimeout(()=> {
            console.log("SetTimeout")
            document.title = counter.toString()
        }, 1000)
    }, [counter]);


    return <>
        Hello! {counter} -- {fake}
        <button onClick={()=> {setFake(fake+1)}}>fake +</button>
        <button onClick={()=> {setCounter(counter+1)}}>counter +</button>
    </>
}

export const SetTIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log("SetTIntervalExample")

    useEffect(() => {

        setInterval(()=> {
            console.log("tick" + counter)
            setCounter((state)=>state + 1);
        }, 1000);
    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}
    </>
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log("Component rendered with " + counter)

    useEffect(() => {
        console.log('Effect occurred' + counter)

        return () => {
            console.log("RESET EFFECT " + counter)
        }

    }, [counter])
    const increase = ()=>{ setCounter(counter+1) }
    return <>
        Hello, counter {counter} <button onClick ={ increase }>+</button>
    </>
}