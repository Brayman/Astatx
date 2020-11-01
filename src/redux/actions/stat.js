// const URL = 'http://localhost:5000'
const URL = 'https://astatx.herokuapp.com'
export const setStat = (stat) => ({
    type: 'GET_STAT',
    payload: stat
});
export const addStat = (stat) => ({
    type: 'ADD_STAT',
    payload: stat
});
export const getStat = (url) => dispatch => {
  console.log(url);
    fetch(URL+'/stat'+url).then(( data ) => {
        console.log(data);
        return data.json()
    }).then(data => {
      dispatch(setStat(data))
    })
  }
export const fetchStats  = (newStat) => dispatch => {
    fetch(URL+'/stat', {
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
export const setFilterWeek = () => ({
      type: 'SORT_WEEK_ASC',
      payload: {
          type: 'asc',
          length: 7
      }
})
const Actions = {
    getStat: () => dispatch => {
        console.log('dddd');
        fetch(URL+'/stat').then(( data ) => {
            console.log(data);
            return data.json()
            
        }).then(data => dispatch(Actions.setStat(data)))
      },
      setStat : (stat) => ({
        type: 'GET_STAT',
        payload: stat
    })
}

export default Actions;