export default (state = {type: 'asc',
length: 0}, {type, payload}) => {
    switch (type) {
        case 'SORT_ASC':
            return payload
        case 'SORT_DESC':
            return payload
        default:
            return state;
    }
}