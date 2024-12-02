import axios from 'axios';

// custom axios instance
const customFetch = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
});

export default customFetch;
