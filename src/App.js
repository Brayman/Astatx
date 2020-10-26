import React, {useEffect} from 'react';
import Form from './component/Form';
import Table from './component/Table';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as statActions  from '../src/redux/actions/stat';
import orderBy from "lodash/orderBy";
import './App.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const sortBy = (element, type) => {
  
  
  return orderBy(element, 'date', 'asc');
}

function App(props) {
useEffect(() => {
  props.getStat()
},[]);
const lastElement = props.statistic.length > 0 ? props.statistic[props.statistic.length-1] : {prorate: 0}
  return (
    <div className="App">
      <LineChart
        width={document.documentElement.clientWidth-50}
        height={600}
        data={props.statistic}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="date"/>
        <YAxis domain={['dataMin', 'dataMax + 0.01']}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="rate" stroke="#4caf50" activeDot={{ r: 3 }} dot={{ r: 0.5 }}/>
        <Line type="monotone" dataKey="prorate" stroke="#f03226" activeDot={{ r: 3 }} dot={{ r: 1 }} />
        
      </LineChart>
      <Form action={props.fetchStats} lastRate={lastElement.prorate}/>
      <Table data={props.statistic}/>
    </div>
  );
}

const mapState = state => ({
  ...state,
  statistic: sortBy(state.statistic)
});
  const mapDispatch = dispatch => ({
    ...bindActionCreators(statActions, dispatch)
    
  });
export default connect(mapState, mapDispatch)(App);
