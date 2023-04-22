import { createContext, useState } from 'react'

export const GeneralContext = createContext();

export function GeneralContextProvider(props) {
    const [isLogged, setIsLogged] = useState(false)

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

export default GeneralContextProvider