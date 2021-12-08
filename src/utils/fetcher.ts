import axios from 'axios';

export const get = <T>(url: string) => axios.get<T>(url).then((res) => res.data);
