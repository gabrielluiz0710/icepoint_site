import axios from "axios";

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/b662623ec58942728c4f0fe15ed05d7c',
    timeout: 10000,
});
