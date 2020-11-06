import React, {useEffect} from 'react';
import Form from './component/Form';
import Filter from './component/Filter';
import SignIn from './component/SignIn';
import Auth from './component/Auth';
import Table from './component/Table';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";
import * as allActions  from '../src/redux/actions/stat';
import orderBy from "lodash/orderBy";
import './App.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {BiLoaderCircle } from "react-icons/bi";


const sortBy = (element, type) => { 
  return orderBy(element, 'date', 'asc');
}

function Home({props}) {
let loc = useLocation();
useEffect(() => {
  props.getStat(loc.search)
},[]);
const lastElement = props.statistic.length > 0 ? props.statistic[props.statistic.length-1] : {prorate: 0}
  return (
    <div className="App">
      {props.appdata.isLoading==true ? <div className='loading'><BiLoaderCircle/></div> : null}
      <Filter filterAction={props.getStat}/>
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

function App(props) {
  let par = useParams();
  return (
    <Switch>
        <Route exact path={'/'}>
          {props.user.auth==false ? <Redirect to='/signin'/> :  <Home props={props} />}
        </Route>
        <Route exact path={'/signin'}>
          {props.user.auth==true ? <Redirect to={`/${props.user.profile.login}`}/>:  <SignIn actions={{regAction: props.FetchRegData, loginAction: props.FetchLogIn}}/>}
        </Route>
        <Route exact path={'/:login'}>
          {props.user.profile.login==par.login ? <Redirect to='/signin'/> :  <Home props={props} />}
        </Route>
        <Route path='*'>
          <div>
            not found
          </div>
        </Route>
    </Switch>
  )
}
const mapState = state => ({
  ...state,
  statistic: sortBy(state.statistic),
});
  const mapDispatch = dispatch => ({
    ...bindActionCreators(allActions, dispatch)
    
  });
export default connect(mapState, mapDispatch)(App);
