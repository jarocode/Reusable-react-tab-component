import React, {useState, createContext} from 'react';

export const FirstContext = createContext();
export const FirstProvider = ({children}) => {
    const [clicked, setClicked] = useState(false);
    return ( 
        <FirstContext.Provider value={[clicked, setClicked]}>
            {children}
        </FirstContext.Provider>
     );
}
 

