type ActionType = {
    type: string     // обязательно есть это свойство. надпись, что именно нужно сделать н/р: "REMOVE-TASK", "ADD-TASK" и т.д.
}

type StateType = {
    collapsed: boolean
}
export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"     // использование CONSTANt не даст нам ошибиться при написании свойств, опечататься случайно. Далее используем уже эти const
export const reducer = (state: StateType, action: ActionType): StateType => {
    // самая топовая запись именно так:
    switch (action.type) {
        case TOGGLE_CONSTANT:
            /*const stateCopy = {...state}                  // можно итак созадть копию, а затем присвоить collapsed новое значение
            stateCopy.collapsed = !state.collapsed*/
            return  {...state, collapsed: !state.collapsed}    // создали копию объекта в одну строку, сразу переприсвоили значениие collapsed. Возвращаем объект, копируем все старое, что в нем было и меняем значение у свойства collapsed на противоположное, которое сидело в старом state -- !state.collapsed--
        default:
            //return state                                   // action который Reduсer не ждет нет смысла dispath(тить)
            throw new Error("Bad action type")      // как один из вариантов мы можем сгенерировать новую ошибку в default:
        // if (action.type === TOGGLE_CONSTANT) {               // если к нам пришел объект action и у него в этой инструкции сидит тип "TOGGLE-COLLAPSED", т.е. "совпало ключ и замок"
        //   return !state                                    // то мы тогда вернем противоподложное значение стэйта !state
    }

    return state                                    // если к нам пришла инструкция, а мы не нашли совпадение по ключу type н/р: "REMOVE-TASK", "ADD-TASK" и т.д., то мы вернем тот state, который к нам пришел без изменения
}