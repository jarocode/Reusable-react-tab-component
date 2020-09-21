import React from 'react';
import styled from '@emotion/styled';
import Tabsection from './tabSection/Tabsection';
import {Change} from '../functions/TabFunctions';


const Container = styled.div`
    width: 68.7%;
    margin: auto;
    height: 50%;
`

const Border = {
    position: 'absolute',
    width: '8rem',
    height: '5px',
    background: '#fff',
    left: '16rem',
    top: '16.7rem',
    display: 'block'
}

const TabArr = ['Tab1' ,'Tab2', 'Tab3', 'Tab4']

const TabContent = [
    () =><h1> THIS IS TAB1 !!!</h1>,
    () =><h1> THIS IS TAB2 !!!</h1>,
    () =><h1> THIS IS TAB3 !!!</h1>,
    () =><h1> THIS IS TAB4 !!!</h1>
]

const Width = 70;   

const Bottomhalfpage = () => {
    return ( 
        <Container>
            <Tabsection 
                border ={Border} 
                tabs={TabArr}
                tabContent={TabContent}
                tabFunc={Change}
                tabWidth={Width}
            />
        </Container>
     );
}
 
export default Bottomhalfpage;