import Axios from 'axios'
//action types 
const LOAD_DATA = "LOAD_DATA"
const LOADDATA_SUCCESS = "LOADDATA_SUCCESS"

//action is funciton, return actional objects
let loadDataAction = () => {
    return async (dispatch) => {
        try {
            // dispatch({ type: LOAD_DATA });
            let users = [];
            await Axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    console.log("inside action - axios")
                    users = response.data;
                    console.log(users);
                    console.log("inside action - before")
                })
                .catch(() => { })
            dispatch({ type: LOADDATA_SUCCESS, payload: users })
        }

        catch (err) { }

    }
}
export { loadDataAction, LOADDATA_SUCCESS, LOAD_DATA }
