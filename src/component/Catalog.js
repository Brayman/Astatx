import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {  
    NavLink,
    useLocation
  } from "react-router-dom";
import last from "lodash/last";
import forEach from "lodash/forEach";
import groupBy from "lodash/groupBy";
import * as allActions  from '../redux/actions/stat';
import '../css/catalog.css';
function Box({data}) {
    return (
        <div className='catalog_box'>
            <div className='catalog_month'> 
                {data.dateName||'Всё время'}
            </div>
            <div>
                Купленно долларов: {data.sumUSD}
            </div>
            <div>
                Потраченно рублей: {data.sumBYN}
            </div>
            <div>
                Максимальный курс : {data.maxRate}
            </div>
            <div>
                Средний курс : {data.averageRate}
            </div>
            <div>
                Минимальный курс : {data.minRate}
            </div>
        </div>
    )
}

function Catalog({getCat, user, getCatFull, month, all}) {
    
    let loc = useLocation();
    useEffect(() => {
        console.log(month);
        getCat(user)
        getCatFull(user)
      },[]);
    return (
        <div className='Catalog'>
            <div className='MonthCatalog'>
                {
                    month.map(arg => (
                        <Box key={arg.date} data={arg} />
                        )
                    )
                }
            </div>
            <div className='AllCatalog'>
                <Box data={all} />
            </div>
        </div>
    )
} 

const mapState = state => ({
    alldata: state.statistic,
    user: state.user.profile.login,
    month: state.stat.month,
    all: state.stat.all
  });
    const mapDispatch = dispatch => ({
      ...bindActionCreators(allActions, dispatch)
      
    });
  export default connect(mapState, mapDispatch)(Catalog);