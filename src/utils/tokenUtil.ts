import axios from "axios";
import { setCookie, deleteTokens } from "./cookieUtil";

export const isTokenValid = (token: string): boolean => {
    try {
        const payload = JSON.parse(atob(token.split(".")[1])); 
        const currentTime = Math.floor(Date.now() / 1000);
        return payload.exp > currentTime;
    } catch (error) {
        return false;
    }
};

export const refreshToken = async () => {
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/refresh",
            {},
            {
                withCredentials: true,
            }
        );
        setCookie({ accessToken: response.data.accessToken });
        return response.data.accessToken;
    } catch (error) {
        console.log("Failed to refresh token:", error);
        
        deleteTokens();
        localStorage.removeItem("user");
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`);
    }
};
