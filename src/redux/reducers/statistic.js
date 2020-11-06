import orderBy from "lodash/orderBy";
export default (state = [], {type, payload}) => {
    switch (type) {
        case 'GET_STAT':            
            return orderBy(payload, 'date', 'asc')
        case 'ADD_STAT':
            return [...state,payload]
        
        default:
            return state;
    }
}