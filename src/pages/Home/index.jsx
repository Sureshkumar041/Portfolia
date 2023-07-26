import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../../redux/actions/userAction';

const Home = () => {
    const [count, setCount] = useState(0),
        dispatch = useDispatch(),
        reduxCount = useSelector(state => state.userReducer.userDetails);
    const addCount = () => {
        setCount((prev) => prev + 1);
        dispatch(userDetails({ value: count }));
    }
    return (
        <>
            <div>Home Page</div>
            Count
            <p style={{ color: "pink", fontWeight: "bold" }}>{count} </p>
            <button onClick={(e) => addCount()}>ADD</button>
            <p> REDUX {reduxCount?.value} </p>
        </>
    )
}

export default Home;
