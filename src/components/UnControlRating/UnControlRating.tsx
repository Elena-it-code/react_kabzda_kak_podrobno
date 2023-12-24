import {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}


export function UnControlRating(props: RatingPropsType) {
    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            {/*<Star selected={value > 0}/><button onClick={()=>{setValue(1)}}>1</button>
            <Star selected={value > 1}/><button onClick={()=>{setValue(2)}}>2</button>
            <Star selected={value > 2}/><button onClick={()=>{setValue(3)}}>3</button>
            <Star selected={value > 3}/><button onClick={()=>{setValue(4)}}>4</button>
            <Star selected={value > 4}/><button onClick={()=>{setValue(5)}}>5</button>*/}
            <Star selected={value > 0} value={1} setValue={()=>{setValue(1); props.onChange(1); } }/>
            <Star selected={value > 1} value={2} setValue={()=>{setValue(2); props.onChange(2); } }/>
            <Star selected={value > 2} value={3} setValue={()=>{setValue(3); props.onChange(3); } }/>
            <Star selected={value > 3} value={4} setValue={()=>{setValue(4); props.onChange(4); } }/>
            <Star selected={value > 4} value={5} setValue={()=>{setValue(5); props.onChange(5); } }/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Star(props: StarPropsType) {
    // самая простая запись:
    // if(props.selected === true){
    //     return <span><b>star</b></span>
    // } else{
    //     return <span>star</span>
    // }
    return (
        /*props.selected ? <span><b>star</b></span> : <span>star</span>*/ // один из вариантов рефакторинга, можно и так
        <span onClick={() => {
            props.setValue(props.value)
        }}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}


//-------------------------2 вариант реализации. Можем передавать данные в функцию сразу setValue={()=> setValue(1), которую передаем----------------------------------------

// export function UnControlRating(props:RatingPropsType){
//     let [value, setValue]=useState(0)
//
//     return (
//         <div>
//
//             <Star selected={value > 0} setValue={()=> setValue(1)}/>
//             <Star selected={value > 1} setValue={()=> setValue (2)}/>
//             <Star selected={value > 2} setValue={()=> setValue (3)}/>
//             <Star selected={value > 3} setValue={()=> setValue (4)}/>
//             <Star selected={value > 4} setValue={()=> setValue (5)}/>
//         </div>
//     )
// }
//
// type StarPropsType = {
//     selected: boolean
//     setValue: () => void // тогда тут уже просто предедаем анонимную функцию
// }
// export function Star(props:StarPropsType){
//
//     return(
//         /*props.selected ? <span><b>star</b></span> : <span>star</span>*/ // один из вариантов рефакторинга, можно и так
//         <span onClick={()=>{props.setValue()}}>
//             {props.selected ? <b>star </b> : 'star '}
//         </span>
//     )
// }