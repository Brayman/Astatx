import React, {useEffect} from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine
} from 'recharts';
import {BiLoaderCircle } from "react-icons/bi";
import Form from './Form';
import Filter from './Filter';
import Table from './Table';
import {useLocation} from "react-router-dom";
function Graph({props}) {
    const getData = () => props.getStat({login: props.user.profile.login, other: loc.search})
    let loc = useLocation();
    useEffect(() => {
      getData()
    },[props.isLoading]);
    const lastElement = props.statistic.length > 0 ? props.statistic[props.statistic.length-1] : {prorate: 0}
    console.log(props);
      return (
        <div className="App">
          {props.appdata.isLoading===true ? <div className='loading'><BiLoaderCircle/></div> : null}
          <Filter filterAction={props.getStat} login={props.user.profile.login} status={props.appdata.filter}/>
          <LineChart
            width={document.documentElement.clientWidth-50}
            height={600}
            data={props.statistic}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="date.default"/>
            <YAxis domain={['dataMin', 'dataMax + 0.01']}/>
            <Tooltip />
            <Legend />
            <ReferenceLine x="Wed Sep 02 2020" stroke="red" label="Max PV PAGE" />
            <ReferenceLine y={props.stat.all.averageRate} label={"Rate "+props.stat.all.averageRate} stroke="grey" />
            <Line type="monotone" dataKey="rate" stroke="#4caf50" activeDot={{ r: 3 }} dot={{ r: 0.5 }}/>
            <Line type="monotone" dataKey="prorate" stroke="#f03226" activeDot={{ r: 3 }} dot={{ r: 1 }} />
            
          </LineChart>
          {props.appdata.form.open ? <Form addStat={props.fetchStats} close={props.closeAddForm} user={props.user.profile} lastRate={lastElement.prorate}/> : <button className='add trans' onClick={props.openAddForm}>Добавить</button>}
          <Table data={props.statistic}/>
        </div>
        
      );
    }
export default Graph;