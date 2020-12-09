import axios from 'axios'

const api = axios.create({
    
    baseURL: 'http://localhost:8080/api',
    // headers: {
	// 	// 'Authorization': '1234',
	// 	'Content-Type': 'application/json',
	// 	'Accept': 'application/json',
    
    // 'Access-Control-Allow-Origin' : '*',
    // 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    // }
})

export const insertUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)
export const registerUser = payload => api.post('/register', payload)
export const LoginUser = payload => api.post('/login', payload)

const apis = {
    insertUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
    registerUser,
    LoginUser,
}

export default apis