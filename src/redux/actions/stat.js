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

export const filter = (stat) => ({
  type: 'FILTER',
  payload: stat
});
export const openAddForm = () => ({
  type: 'OPEN_ADD_FORM',
});
export const closeAddForm = () => ({
  type: 'CLOSE_ADD_FORM',

});
export const load = () => ({
  type: 'LOADING',
  payload: true
});
export const loadComp = () => ({
  type: 'LOADING_COMPLEATE',
  payload: false
});
const loadFail = (data) => ({
  type: 'LOADING_FAIL',
  payload: data
})
export const getStat = (url) => dispatch => {
  console.log(url);
    fetch(URL+'/Astatx/statistic/'+url.login+url.other).then(( data ) => {
        console.log(data);
        dispatch(filter(url.other));
        return data.json()
    }).then(data => {
      dispatch(setStat(data))
      dispatch(loadComp())
    })
  }
export const fetchStats  = (newStat, login) => dispatch => {
    fetch(URL+'/Astatx/'+login+'/addelement', {
        method: 'PUT', // *GET, POST, , DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStat)
      }).then(res => {return res.json()})
      .then(data => {
        console.log(data);
        dispatch(addStat(data))
        console.log('закрываем');
        dispatch(closeAddForm())
      }); 
    }
export const newFetchStats  = (newStat, id) => dispatch => {
      fetch(URL+'/nstat/'+id, {
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
  fetch(URL+'/Astatx/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(post)
        }).then(res => { console.log(res);
          return res.json()})
        .then(data => {
          console.log(data);
          data.error === undefined ? dispatch(login(data)) : dispatch(loadFail(data))
          
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
export const getCat = (url) => dispatch => {
    console.log(url);
      fetch(URL+'/catalog/'+url).then(( data ) => {
          console.log(data);
          return data.json()
      }).then(data => {
        dispatch(getCatalog(data))
      })
    }
    export const getCatalog = (stat) => ({
      type: 'GET_CATALOG',
      payload: stat
    });
export const getCatFull = (url) => dispatch => {
  fetch(URL+'/catalog/alltime/'+url).then(( data ) => {
    return data.json()
  }).then(data => {
    dispatch(getCatalogFull(data))
  })
}
export const getCatalogFull = (stat) => ({
  type: 'GET_CATALOG_FULL',
  payload: stat
});