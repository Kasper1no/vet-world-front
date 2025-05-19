import axios from 'axios';
import { isTokenValid, refreshToken } from '@/utils/tokenUtil';
import { getCookie,deleteTokens } from './cookieUtil';

axios.interceptors.request.use(async (config) => {
    const accessToken = await getCookie("accessToken");
    
    if (!accessToken) {
        return config; 
    }

    if (!isTokenValid(accessToken)) {
        try {
            const newToken = await refreshToken();
            config.headers.Authorization = `Bearer ${newToken}`;
        } catch (error) {
            console.error("Token refresh failed", error);
        }
    } else {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    
    return config;
});


export default axios;
