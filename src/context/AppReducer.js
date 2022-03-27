const AppReducer = (state, action) => {
    switch(action.type){
        case 'SHOW_MENU':
            return {
                ...state,
                mode: action.payload,

            }
        case 'HIDE_MENU':
            return {
                ...state,
                mode: action.payload,
            }
        default:
            return state
    }
}

export default AppReducer;