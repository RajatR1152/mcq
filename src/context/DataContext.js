import { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {

    const [subData, setSubData] = useState([]);

    return (
        <DataContext.Provider value={{ subData, setSubData }}>
            {children}
        </DataContext.Provider>
    )
}