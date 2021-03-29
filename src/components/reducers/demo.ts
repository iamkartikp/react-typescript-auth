const initState = {
    items: [],
    item: {}
}

export const demo = (state = initState, action: any) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                items: action.payload
            }
        case "CREATE_USER":
            return {
                ...state,
                items: action.payload
            }
        default: 
            return state
    }
}