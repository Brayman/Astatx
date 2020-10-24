export default (state = [], {type, payload}) => {
    switch (type) {
        case 'GET_STAT':
            return payload
        case 'ADD_STAT':
            return [...state,payload]    
        
        default:
            return state;
    }
}