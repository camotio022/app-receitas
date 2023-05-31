import { useContext, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export function NavigationHandler() {
    const { isLoggedIn } = useContext(AuthContext)
    const location = useLocation()
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault()
            event.returnValue = ''
        }
        window.addEventListener('beforeunload', handleBeforeUnload)
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [])
    return <Navigate to={isLoggedIn ? location.pathname : '/'} replace />
}
