import axios from "axios";

export const http = axios.create({
    baseURL: 'https://4ugshn8fjk.execute-api.us-east-1.amazonaws.com/Prod'
});