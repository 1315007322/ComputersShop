import axios from 'axios';
import React from 'react';
import { message } from 'antd';
import { history } from './router';

let baseURL = '';


if (process.env.NODE_ENV === 'development') {
    baseURL = '/api/'
}
else if (process.env.NODE_ENV === 'production') {
    baseURL = 'http://www.hblyan.com:8083/'
}

console.log(process.env.NODE_ENV);

const myAxios = axios.create({
    baseURL
})


// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response: any) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    let { state, data, message: msg } = response.data;

    if (state === 200) {
        return Promise.resolve(data)
    }
    if (state === 17020) {
        message.error(msg)
        localStorage.clear();
        console.log(state);

    }
    else {
        message.error(msg)
        return Promise.reject(false)
    }
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myAxios;