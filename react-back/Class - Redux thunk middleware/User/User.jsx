import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDataAction } from '../redux/user/user.action'
const User = () => {
    let dispatch = useDispatch();
    let users = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        //dispatch an action 
        dispatch(loadDataAction());
    }, []);
    return (
        <div>
            <h1>USer Data</h1>
            <pre>{JSON.stringify(users)}</pre>
        </div>
    )
}

export default User
