import { createContext, useEffect, useState } from "react";

const ControllerContext = createContext({});

export function ControllerProvider({ children }) {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ refreshController, setRefreshController ] = useState(0);

    return (
        <ControllerContext.Provider value={{
            isLoading,
            setIsLoading,
            refreshController,
            setRefreshController
        }}>
            {children}
        </ControllerContext.Provider>
    )
}

export default ControllerContext;