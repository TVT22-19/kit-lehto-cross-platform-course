import {createContext, ReactElement, useContext, useState} from "react";

interface ThemeContextType {
    isDarkMode: boolean,

    toggleDarkMode(): void,
}

export const ThemeContext = createContext<ThemeContextType>({
    isDarkMode: false,
    toggleDarkMode(): void {
    }
})

export default function ThemeProvider(props: { children: ReactElement }) {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => setIsDarkMode(prevState => !prevState)

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
