import React, {useState} from "react";


export default {
    title: 'React.memo demo',
}


const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USERS')
    return <div>{
        props.users.map((u,i)=> <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)               // Обернули нашу компоненту Users в оболочку функцию UsersSecret. Теперь  контейнерная компонента, которая вылезла из React.memo не будет перезапускать функцию UsersSecret(), если props не изменились

export const Example1 = ()=> {
    console.log("Example1")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers);
    }

    users.push('Sveta ' + new Date().getTime())                // таким способом мы нарушили все правила имутабельности. Поэтому React перерисовывать не будет этот массив и добавлять нам 'Sveta'. React.memo сохранит React от перериосвки и не вызовет f () UsersSecret. А вызовет только, когда мы изменим наши props у этой функции обертки. Т.е. нажмем на кнопку. Для которой у нас прописана правильная логика копирования объектов в React

    return <>
        <button onClick={()=> {setCounter(counter+1)}}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}