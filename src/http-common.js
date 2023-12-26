import axios from "axios";

export const http = axios.create({
    baseURL: 'https://rboc0pd24a.execute-api.us-east-1.amazonaws.com/Prod'
});