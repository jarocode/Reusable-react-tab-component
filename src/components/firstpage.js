import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import Nav from '../components/Nav';
import Hamburger from '../components/Hamburger';
import Sidebar from '../components/Sidebar';
import Fullpage from '../components/Fullpage';


const FirstPage  = () => {
    return ( 
        <Fragment>
            <Nav/>
            <Hamburger/>
            <Fullpage/>
            <Sidebar/>
        </Fragment>
     );
}
 
export default FirstPage;