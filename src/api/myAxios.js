import axios from "axios";


export const myAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default myAxios;
