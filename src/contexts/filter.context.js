const { createContext, useContext, useState } = require("react");

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [state, setState] = useState({
        filter: "",
        type: ""
    });

    return (
        <AppContext.Provider value={{
            state,
            setState
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}