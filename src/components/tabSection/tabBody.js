import React from 'react';
import styled from '@emotion/styled';


const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
`
const TabDiv = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    height:100%;
    text-align: center;
    /* padding-top: 6rem; */
`
const TabBody = ({tabContent, show }) => {
    return ( 
        <Container>
            <TabDiv>
                {tabContent[show]()}
            </TabDiv>  
        </Container>
     );
}
 
export default TabBody;