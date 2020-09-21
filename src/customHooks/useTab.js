import React from 'react'
import { useEffect, useState } from 'react';

const useTab = () => {
    const [show, setShow] = useState(0);
    
    const handleClick = (index) => {
        setShow(index);
    }
    return {show, handleClick};
}
 
export default useTab;