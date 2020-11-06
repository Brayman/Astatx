export default (state = {auth: false, profile: {}}, {type, payload}) => {
    switch (type) {
        case 'LOGIN':
            console.log('work');
            return {auth: true, profile: payload};
        case 'LOGOUT':
            return {auth: false, profile: {}};
        default:
            return state;
    }
}