import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    Authorization: ''
  }
})