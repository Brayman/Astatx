export default (state = {isLoading: true}, {type, payload}) => {
    switch (type) {
        case 'LOADING':
            return {...state,isLoading: payload};
        case 'LOADING_COMPLEATE':
            return {...state,isLoading: payload};
        default:
            return state;
    }
}