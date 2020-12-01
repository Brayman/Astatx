const defaultState = {
    isLoading: false,
    form: {
        open: false,
    }
}
export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case 'LOADING':
            return {...state,isLoading: payload};
        case 'LOADING_COMPLEATE':
            return {...state,isLoading: payload};
        case 'OPEN_ADD_FORM':
            return {
                ...state,
                form: {
                    open: true
                }
            };
        case 'CLOSE_ADD_FORM':
            return {
                ...state,
                form: {
                    open: false
                }
            };
            
        default:
            return state;
    }
}