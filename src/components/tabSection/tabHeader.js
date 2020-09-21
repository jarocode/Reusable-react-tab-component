import React, {useMemo} from 'react';
import styled from '@emotion/styled';
import {Motion, spring} from 'react-motion';


const Flex = styled.div`
   display: flex;
   justify-content: space-around;
   border-bottom: 1px solid  #fff;
`
const P = styled.p`
    cursor: pointer;
`

const Tabheader = ({border, tabs, handleClick, change, tabWidth}) => {
    
    const Container = useMemo(() => styled.div`
        ${`width: ${tabWidth}%;`}
        margin: auto;
        margin-bottom: 2rem;
    `,[]);
    
    return ( 
        <Container>
            <Flex>
                {tabs.map((el,ind) => 
                    <P  onClick={() => handleClick(ind)}>{el}</P>
                )}
            </Flex>
            <Motion 
                defaultStyle ={{x: 16}}
                style={{x:spring(change())}}
            >
                {style => (<div style={{...border, left: `${style.x}rem`}}></div>)}
            </Motion>
        </Container>
     );
}
 
export default Tabheader;