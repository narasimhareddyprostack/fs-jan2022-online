import Axios from 'axios'
//action types 
const LOADDATA_SUCCESS = "LOADDATA_SUCCESS"

//action is funciton, return actional objects
let loadDataAction = async () => {
    console.log("in action - 1");
    //invoking API
    let users = [];
    let url = "https://jsonplaceholder.typicode.com/user"
    await Axios.get(url).then((res) => {
        console.log("in action -2");
        console.log(res.data)
        users = res.data;
    }).catch()
    return { type: LOADDATA_SUCCESS, payload: users }
}

export { loadDataAction, LOADDATA_SUCCESS }
