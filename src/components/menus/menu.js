import React from 'react';
import styled from '@emotion/styled';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../../actions';

const Menu = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    console.log('rendered');
    return ( 
        <>
        <h1> counter : {counter}</h1>
        <button onClick = {() => dispatch(increment())}>+</button>
        <button onClick = {() => dispatch(decrement())}>-</button>
        </>
     );
}
 
export default Menu;