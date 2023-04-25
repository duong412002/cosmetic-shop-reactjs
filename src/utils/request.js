import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:8088/api/v1/',
})

export const get = async (path, limit, options = {}) => {
    const response = await request.get(path, limit, options);

    return response;
}

export default request;