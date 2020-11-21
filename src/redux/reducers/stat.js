export default (state = {
    sumBYN: 0,
    sumUSD: 0,
    averageProrate: 0,
    averageCostUSD: 0,
    averageCostBYN: 0

}, {type, payload}) => {
    switch (type) {
        case 'AVERAGE_USD':            
            return {...state, averageCostUSD: payload}
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