import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    axios.defaults.baseURL = 'http://localhost:5000/api';
    axios.defaults.withCredentials = true;

    //interceptor to refresh token automatically

    axios.interceptors.response.use(
			(response) => response,
			async (error) => {
				const originalRequest = error.config;
				if (error.response?.status === 401 && !originalRequest._retry) {
					originalRequest._retry = true;
					try {
                        await axios.post("/user/refresh_token");
                        
						return axios(originalRequest);
					} catch (refreshError) {
						setUser(null);
						return Promise.reject(refreshError);
					}
				}
				return Promise.reject(error);
			}
    );
    
    const login = async (email, password) => {
        const res = await axios.post('/user/login', { email, password })
        setUser(res.data)
    }

     const register = async (username, email, password) => {
				const res = await axios.post("/user/register", { username, email, password, });
				setUser(res.data);
     };
    
     const logout = async () => {
				await axios.post("/user/logout")
     };
    
    //Check if user is logged in on mount

    useEffect(() => {
    
        const loadUser = async () => {
            try {
            
                const res = await axios.post('/user/auth/me')
              
                setUser(res.data)
            } catch (err) {
                console.log(err)
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        loadUser();

    }, [])

    return (
        <AuthContext.Provider value={{user, login, register, logout, loading}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)