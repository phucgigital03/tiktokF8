import axios from 'axios';

export const fullStackRequest = axios.create({
    baseURL: process.env.REACT_APP_URL_FULLSTACK,
});
