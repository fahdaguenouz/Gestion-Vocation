import axios from 'axios';


export const axiosClient=axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL+'/api',
    withCredentials: true, // Needed for cookies if session authentication is used
    headers: {
        'Content-Type': 'application/json',
    },
}) 
axiosClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  })