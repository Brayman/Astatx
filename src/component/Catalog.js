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
                Сумма BYN {data.sumBYN} USD {data.sumBYN}
                Средний сумма BYN {data.averageBYN} USD {data.averageUSD}
                Средний курс {data.averageRate}
                Максимальный курс {data.maxRate}
                Минимальный курс {data.minRate}
           </div>
    )
}

function Catalog({setStatistic, statistic, alldata}) {
    const [stat, setStat] = useState({
        Dec: {
            sumUSD: 0,
            sumBYN: 0,
            averageBYN: 0,
            averageUSD: 0,
            averageRate: 0,
            maxRate: 0,
            minRate: 0
        }
    });
    let loc = useLocation();
    const dataTest = [
    {
        month: 10,
        sumUSD: 300,
        sumBYN: 520,
        averageBYN: 52,
        averageUSD: 20,
        averageRate: 2.4,
        maxRate: 2.7,
        minRate: 2.45
    },
    {
        month: 11,
        sumUSD: 270,
        sumBYN: 450,
        averageBYN: 42,
        averageUSD: 15,
        averageRate: 2.5,
        maxRate: 2.6,
        minRate: 2.4
        
    }]
    
    
    const newData = alldata.reduce((acc, now, i,arr) => {
        
        
       
    },[])
    const sumBYN = alldata.reduce((acc, now, i,arr) => {
        
        return acc + now.byn
       
    },0)
    const sumUSD = alldata.reduce((acc, now, i,arr) => {
        
        return acc + now.usd
       
    },0)
    const sredUSD = alldata.reduce((acc, now, i,arr) => {
        
        if (i+1== arr.length) {
            return Math.trunc(((acc + now.usd)/(i+1))*1000)/1000
        }
        return acc + now.usd
       
    },0)
    const sredRate = alldata.reduce((acc, now, i,arr) => {
        
        if (i+1== arr.length) {
            return Math.trunc(((acc + now.prorate)/(i+1))*1000)/1000
        }
        return acc + now.prorate
       
    },0)
    useEffect(() => {
        const data = groupBy(alldata, 'date.month')
        const piu = forEach(data, (value, key)=>{
            setStatistic(key, value)
            console.log(stat[key]);
            
        })
      },[alldata]);
    return dataTest.map(arg => (
        <Box key={arg.month} data={arg} />
        )
    )
} 

const mapState = state => ({
    alldata: state.statistic,
    statistic: state.stat
  });
    const mapDispatch = dispatch => ({
      ...bindActionCreators(allActions, dispatch)
      
    });
  export default connect(mapState, mapDispatch)(Catalog);