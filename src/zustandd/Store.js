import axios from "axios";
import { create } from "zustand";

const request = axios.create({
    baseURL:process.env.REACT_APP_baseURL,
    timeout:1000
})

export const useStore = create((set) => {
    return {
        workform: [],
        action : async (type, info) => {
            let d;
            switch(type) {
                case 'get':
                    d = await request.get('/'); 
                    break;
                case 'post':
                    d = await request.post('/', info); 
                    break;
                case 'delete':
                    d = await request.delete(`/${info}`);
                    break;
                case 'put':
                    d = await request.put('/', info); 
                    break;
            }
        

            set({workform:d.data})
        }
    }
})