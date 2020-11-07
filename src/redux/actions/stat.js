const URL = 'http://localhost:5000'
// const URL = 'https://astatx.herokuapp.com'
export const setStat = (stat) => ({
    type: 'GET_STAT',
    payload: stat
});
export const addStat = (stat) => ({
    type: 'ADD_STAT',
    payload: stat
});
export const login = (stat) => ({
  type: 'LOGIN',
  payload: stat
});
export const load = () => ({
  type: 'LOADING',
  payload: true
});
export const loadComp = () => ({
  type: 'LOADING_COMPLEATE',
  payload: false
});
export const getStat = (url) => dispatch => {
  console.log(url);
    fetch(URL+'/stat/'+url.login+url.other).then(( data ) => {
        console.log(data);
        return data.json()
    }).then(data => {
      dispatch(setStat(data))
      dispatch(loadComp())
    })
  }
export const fetchStats  = (newStat, login) => dispatch => {
    fetch(URL+'/stat/'+login, {
        method: 'PUT', // *GET, POST, , DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStat)
      }).then(res => {return res.json()})
      .then(data => {
        console.log(data);
        dispatch(addStat(data))
      }); 
    }
export const FetchLogIn  = (post) => dispatch => {
  fetch(URL+'/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(post)
        }).then(res => {return res.json()})
        .then(data => {
          console.log(data);
          dispatch(login(data))
        }); 
      }    
export const FetchRegData  = (post) => dispatch => {
  fetch(URL+'/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(res => {return res.json()})
    .then(data => {
      console.log(data);
      dispatch(FetchLogIn(data))
    }); 
  }
