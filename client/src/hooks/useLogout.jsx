import { useAuthContext } from './useAuthContext'
export const useLogout = () => {
    const { dispatch } = useAuthContext()
    
    const logout = () => {
        //REMOVE USER FROM STORAGE
        localStorage.removeItem('user')

        //DIPATCH LOGOUT ACTION
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
    
}