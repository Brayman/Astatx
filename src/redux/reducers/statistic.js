import orderBy from "lodash/orderBy";
import drop from "lodash/drop";
export default (state = [], {type, payload}) => {
    switch (type) {
        case 'SORT_SIXMONTH':
            return drop(state, state.length-payload.length);
        case 'SORT_MONTH_ASC':
            return drop(state, state.length-payload.length);
        case 'SORT_WEEK_ASC':
            return drop(state, state.length-payload.length);
        case 'GET_STAT':
            console.log(state, payload);
            
            return orderBy(payload, 'date', 'asc');
        case 'ADD_STAT':
            return [...state,payload]    
        
        default:
            return state;
    }
}