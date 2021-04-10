import orderBy from "lodash/orderBy";
export default (state = {month: [],all: []}, {type, payload}) => {
    switch (type) {
        case 'GET_CATALOG':
            console.log('norm')        
            return {...state, month: orderBy(payload, 'date', 'asc')}
        case 'GET_CATALOG_FULL':
            console.log({...state, all: payload});            
            return {...state, all: payload}
        case 'SUM_USD':            
            return {...state, sumUSD: payload}
        case 'SUM_BYN':            
            return {...state, sumBYN: payload}
        case 'AVERAGE_PRORATE':            
            return {...state, averageProrate: payload}
        default:
            return state;
    }
}