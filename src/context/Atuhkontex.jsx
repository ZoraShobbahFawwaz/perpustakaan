import { createContext, useContext, useEffect, useState } from "react"
import { login } from "../api"

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

    async function ikiLogin(username, password) {
        const hasil = await login(username, password)
    }

    return (
        <>
            {children}
        </>
    )
}



