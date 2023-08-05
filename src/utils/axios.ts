import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const service = axios.create(); // Request interceptors

service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // do something
        return config;
    },
    (error: Error) => {
        Promise.reject(error);
    },
); // Response interceptors

service.interceptors.response.use(
    async (response: AxiosResponse) => {
        // do something
        return response;
    },
    (error: Error) => {
        // do something
        return Promise.reject(error);
    },
);

export default service;
