import {combineReducers} from 'redux';
import statistic from './statistic'
import filters from './filter'


export default combineReducers({
    statistic,
    filters
});