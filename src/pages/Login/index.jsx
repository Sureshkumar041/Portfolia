import React from 'react'
import { useSelector } from 'react-redux';

const Login = () => {
    const count = useSelector(state => state.userReducer.userDetails);
    return (
        <>
            <div>Login Page</div>
            <p>Ssss{count} </p>
        </>
    )
}

export default Login;
