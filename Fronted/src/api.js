import axios from "axios"
import { ACCESS_TOKEN } from "./constans"


const api = axios.create({
    baseURL: "http://3.14.153.145:8888"
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        console.error("Request failed:", err.message);
        return Promise.reject(err)
    },

)

export default api