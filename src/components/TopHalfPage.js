import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Body from './Body';

const Container = styled.div`
    width: 68.7%;
    margin: auto;
`
const Tophalfpage = () => {
    return ( 
        <Container>
            <Header/>
            <Body/>
        </Container>
     );
}
 
export default Tophalfpage;