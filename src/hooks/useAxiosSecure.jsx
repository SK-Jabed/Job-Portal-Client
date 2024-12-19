import axios from 'axios';
import React, { useEffect } from 'react';

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

const useAxiosSecure = () => {
    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log("Error Caught in the interceptor", error);
            return Promise.reject(error);
        })
    }, [])

    return axiosInstance;
};

export default useAxiosSecure;