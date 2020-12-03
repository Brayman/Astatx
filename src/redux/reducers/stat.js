export default (state = {}, {type, payload}) => {
    switch (type) {
        case 'FILTER_MONTH':
            console.log(payload);            
            return {...state, [payload.key]: payload.payload}
        case 'AVERAGE_BYN':            
            return {...state, averageCostBYN: payload}
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