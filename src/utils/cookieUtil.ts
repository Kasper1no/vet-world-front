"use server";

import { cookies } from "next/headers";

export const getCookie = async (cookieName: string) => {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(cookieName);
    return cookie ? cookie.value : null;
};


export async function setCookie(data: { accessToken?: string}) {
    const cookieStore = await cookies()

    if (data.accessToken) {
        cookieStore.set('accessToken', data.accessToken, { httpOnly: true, path: '/' });
    }
}

export async function deleteTokens() {
    const cookieStore = await cookies()
    cookieStore.delete('accessToken')
    cookieStore.delete('refreshToken')
}