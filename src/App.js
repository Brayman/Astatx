import React, {useEffect} from 'react';
import Form from './component/Form';
import Filter from './component/Filter';
import SignIn from './component/SignIn';
import Table from './component/Table';
import Menu from './component/Menu';
import Catalog from './component/Catalog';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
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


const sortBy = (element) => { 
  return orderBy(element, 'date.full', 'asc');
}

function Home({props}) {
let loc = useLocation();
useEffect(() => {
  props.getStat({login: props.user.profile.login, other: loc.search})
},[]);
const lastElement = props.statistic.length > 0 ? props.statistic[props.statistic.length-1] : {prorate: 0}
console.log(props.appdata.isLoading);
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
        <Line type="monotone" dataKey="rate" stroke="#4caf50" activeDot={{ r: 3 }} dot={{ r: 0.5 }}/>
        <Line type="monotone" dataKey="prorate" stroke="#f03226" activeDot={{ r: 3 }} dot={{ r: 1 }} />
        
      </LineChart>
      <Form action={props.newFetchStats} user={props.user.profile} lastRate={lastElement.prorate}/>
      <Table data={props.statistic}/>
    </div>
  );
}

function App(props) {
  let par = useParams();
  let loc = useLocation();
  console.log(loc, par);
  return (
    <div className='app'>
      <div className='content'>
        <Switch>
          <Route exact path={'/Astatx'}>
            {props.user.auth===false ? <Redirect to='/Astatx/signin'/> :  <Home props={props} />}
          </Route>
          <Route exact path={'/Astatx/signin'}>
            {props.user.auth===true ? <Redirect to={`/Astatx/${props.user.profile.login}`}/>:  <SignIn actions={{regAction: props.FetchRegData, loginAction: props.FetchLogIn}}/>}
          </Route>
          <Route exact path={'/Astatx/:login'}>
            {props.user.profile.login===par.login ? <Redirect to='/Astatx/signin'/> :  <Home props={props} />}
          </Route>
          <Route exact path={'/Astatx/:login/catalog'}>
            <Catalog />
          </Route>
          <Route path='*'>
            <div>
              not found
            </div>
          </Route>
        </Switch>
      </div>
      <Menu status={props.user.auth}/>
    </div>
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
