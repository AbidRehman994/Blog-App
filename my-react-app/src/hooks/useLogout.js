import { useAuthContext } from "./useAuthContext"

export const useLogout =()=>{

    const logout =()=>{
        //remove user
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch ({type: 'LOGOUT'})
    }
    return{logout}
}
export default useLogout;