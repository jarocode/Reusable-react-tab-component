import React from 'react';
import styled from '@emotion/styled';
import {Motion, spring} from 'react-motion';
import {FirstContext} from '../contexts/FirstContext';
import { useContext } from 'react';


const Sidebar = () => {
    const [clicked, setClicked] = useContext(FirstContext);
    
    const Container = styled.div`
    background: #23355f;
    position: absolute;
    left: 0;
    top: 5rem;
    height: 30rem;
    width: 10rem;
    ${({trans, opac}) => `transform: translateX(${trans}px);
                          opacity: ${opac};` }
`
    
    return ( 
        
        <Motion 
            defaultStyle={{x: -200, opacity: 0}}
            style={{x: spring(clicked? 0 : -200, {stiffness: 130, damping:42}),
             opacity:spring(clicked? 1 : 0,{stiffness: 130, damping:42})}}
            >
                {(style) => (
              <Container opac={style.opacity} trans = {style.x}>
                 
                </Container> )}

                
        </Motion>
    );
            }

 
export default Sidebar;