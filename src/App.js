import React from 'react';
import SignIn from './component/SignIn';
import LogIn from './component/LogIn';
import Graph from './component/Graph';
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



const sortBy = (element) => { 
  return orderBy(element, 'date.full', 'asc');
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
            {props.user.auth===false ? <Redirect to='/Astatx/login'/> :  <Graph props={props} />}
          </Route>
          <Route exact path={'/Astatx/login'}>
            {props.user.auth===true ? <Redirect to={`/Astatx/${props.user.profile.login}`}/>:  <LogIn actions={{loginAction: props.FetchLogIn}}/>}
          </Route>
          <Route exact path={'/Astatx/signin'}>
            {props.user.auth===true ? <Redirect to={`/Astatx/${props.user.profile.login}`}/>:  <SignIn actions={{regAction: props.FetchRegData}}/>}
          </Route>
          <Route exact path={'/Astatx/:login'}>
            {props.user.profile.login===par.login ? <Redirect to='/Astatx/login'/> :  <Graph props={props} />}
          </Route>
          <Route exact path={'/Astatx/:login/catalog'}>
            {props.user.auth===false ? <Redirect to='/Astatx/login'/> :  <Catalog />}
          </Route>
          <Route path='*'>
            <div>
              not found
            </div>
          </Route>
        </Switch>
      </div>
      <Menu status={props.user.auth} user={props.user.profile.login}/>
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
