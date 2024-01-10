import { createContext, useContext, useEffect, useState } from "react"
import { getAllUser, login } from "../api"

export const AtuhKontex = createContext()

export function useAtuhKontex() {
    return useContext(AtuhKontex)
}

export function AtuhKontex(children) {
    const [access_token, setAccessToken] = useState('')

    useEffect(() => {
        const storedToken = localStorage.getItem('token');

        if (storedToken && storedRole && storedID) {
            setAccessToken(JSON.parse(storedToken))
        }

        setIsReady(true)
    }, [])

    async function signIn(username, password) {
        const hasil = await login(username, password)
    }
    return (getAllUser)

    //return (
       // <>
       // {children}
       // </>
   // )
}



