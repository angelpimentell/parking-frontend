import { createContext } from 'react'

export const GeneralContext = createContext();

export function GeneralContextProvider(props) {
    const [isLogged, setIsLogged] = useState([])

    return (
        <GeneralContext.Provider
            value={{
                isLogged,
                setIsLogged
            }}>
            {props.children}
        </GeneralContext.Provider>
    )
}