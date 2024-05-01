import axios from "axios";
import Config from "react-native-config";

const api = axios.create({
    baseURL: Config.API_URL,
});

export const get = (url: string) => {
    const requestConfig = {
        headers: {
            authorId: Config.AUTHOR_ID,
        },
    };

    return api.get(url, requestConfig);
};

export const post = (url: string, data: any) => {
    const requestConfig = {
        headers: {
            authorId: Config.AUTHOR_ID,
        },
    };

    return api.post(url, data, requestConfig);
};

export default api;
