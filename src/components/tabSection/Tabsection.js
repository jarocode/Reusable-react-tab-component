import React from 'react';
import styled from '@emotion/styled';
import TabBody from './tabBody';
import useTab from '../../customHooks/useTab';
import Tabheader from './tabHeader';


const Container = styled.div`
 height: 100%;
 width: 100%;
`

const Tabsection = ({border, tabs, tabContent, tabFunc, tabWidth}) => {
    const {show, handleClick} = useTab();
    const Func = () => tabFunc(show);
   
    return ( 
        <Container>
           <Tabheader 
                border={border} 
                tabs={tabs} 
                handleClick={handleClick}
                change={Func}
                tabWidth={tabWidth}
            />
           
           <TabBody 
                tabContent={tabContent}
                show= {show}
            /> 
        </Container>
     );
}
 
export default Tabsection;