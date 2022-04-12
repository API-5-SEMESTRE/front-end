import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://score-analysis-system-back.herokuapp.com/'
    // baseURL: 'http://localhost:8080/'
})