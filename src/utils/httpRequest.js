import axios from 'axios';

export const fullStackRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api',
});
