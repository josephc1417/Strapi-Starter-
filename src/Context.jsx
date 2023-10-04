import { createContext,useState, useContext } from "react";


const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [pageID, setPageID] = useState(null)
        const openSidebar =() => {
            setIsSidebarOpen(true)
        }        
        const closeSidebar =() => {
            setIsSidebarOpen(false)
        }
    
    return (
        <AppContext.Provider value = {{ isSidebarOpen,  openSidebar, closeSidebar, pageID, setPageID }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
