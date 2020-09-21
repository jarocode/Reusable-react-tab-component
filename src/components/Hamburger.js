import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {FirstContext} from '../contexts/FirstContext';

const Container = styled.div`
    float: right;
    margin: 1rem 2rem 0 0;
    background: #000;
    width: 40px;
    height: 40px;
`
const Div = styled.div`
    width: 80%;
    height: 10%;
    background: #fff;
    margin: 4px 2px 4px 2px;
`
const Hamburger = () => {
    const [clicked, setClicked] = useContext(FirstContext);
    const handleClick = () => {
        setClicked(!clicked);
    }
    return ( 
        <Container onClick={handleClick}>
            <Div></Div>
            <Div></Div>
            <Div></Div>
        </Container>
     );
}
 
export default Hamburger;