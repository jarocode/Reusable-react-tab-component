import React from 'react';
import styled from '@emotion/styled';
import Tophalfpage from './TopHalfPage';
import Bottomhalfpage from './BottomHalfPage';

const Container = styled.div`
    background: #000;
    margin-top: -1.4rem;
    color: #fff;
    height: 40rem;
    width: 62.95rem;
`
const Fullpage = () => {
    return ( 
        <Container>
            <Tophalfpage/>
            <Bottomhalfpage/>
        </Container>
     );
}
 
export default Fullpage;