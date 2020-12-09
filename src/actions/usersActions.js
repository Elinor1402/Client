
import api from '../api'
export const loginAction = (username, password) => {
    return async (dispatch) => {
        // const body = {
        //     username,
        //     password
        // }
            const payload = { username, password}
    
            await api.LoginUser(payload).then(res => {
               
                window.alert(`Login successfully`)
                // username=''
                // password=''
               const isLogged = true
               return dispatch({
                type: "LOGIN",
                payload: isLogged 
                })
        })
            .catch(error => {  
                var response =JSON.stringify(error.response.data.message)
                //רק לא עובד שזה קשןר לבדיקת שדות אם יש משתמש הכל יעבוד
                window.alert(response+ " status: "+error.response.status);
            })
        }
        
    }  

export const logoutAction = () => {
    return {
        type: "LOGIN",
        payload: false
    }
}

