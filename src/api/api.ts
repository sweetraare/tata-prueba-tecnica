import axios from "axios";
import Config from "react-native-config";

const api = axios.create({
    baseURL: Config.API_URL,
});

export function get<T>(url: string) {
    const requestConfig = {
        headers: {
            authorId: Config.AUTHOR_ID,
        },
    };

    return api.get<T>(url, requestConfig);
}

export const post = (url: string, data: any) => {
    const requestConfig = {
        headers: {
            authorId: Config.AUTHOR_ID,
        },
    };

    return api.post(url, data, requestConfig);
};

export default api;
