import React, { useState } from "react";
export const SearchItemContext = React.createContext()

const SearchProvider = ({children}) => {
    const [buscador, setBuscador] = useState('ipod')

    return(
        <SearchItemContext.Provider value={{buscador, setBuscador}}>
            {children}
        </SearchItemContext.Provider>
    )
}
export default SearchProvider 