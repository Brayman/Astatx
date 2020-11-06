import {combineReducers} from 'redux';
import statistic from './statistic';
import user from './user';
import appdata from './appdata';


export default combineReducers({
    statistic,
    user,
    appdata
});