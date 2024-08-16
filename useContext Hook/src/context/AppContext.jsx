import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = '1234567'
    const name = "Abhijeet"
    return(
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;