import { useAuthContext } from './useAuthContext';
import { useWorkoutContext } from './useWorkoutContext';

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: workoutDispatch } = useWorkoutContext()
    
    const logout = () => {
        //REMOVE USER FROM STORAGE
        localStorage.removeItem('user')

        //DIPATCH LOGOUT ACTION
        dispatch({type: 'LOGOUT'})
        workoutDispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return {logout}
    
}