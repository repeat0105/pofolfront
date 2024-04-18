import axios from "axios";
import { create } from "zustand";

const request = axios.create({
  baseURL: process.env.REACT_APP_baseURL,
  timeout: 1000,
});

export const useStore = create((set) => {
  let queryParams;
  return {
    workform: [],
    action: async (type, info) => {
      queryParams = { ip: info?.ip };

      // console.log(info)
      let d;
      switch (type) {
        case "get":
          d = await request.get("/");
          break;
        case "post":
          d = await request.post("/", info);
          break;
        case "delete":
          // d = await request.delete(`/${info.id}`);
          d = await request.delete(`/${info.id}`, { params: queryParams });
          // d = await request.delete(`/`,info);
          //   console.log(1212, d, d.data);
          if (d.data.success === false) {
            alert(d.data.message);
            d = await request.get("/");
          }
          break;
        case "put":
          d = await request.put("/", info);
          break;
      }

      set({ workform: d.data });
    },
  };
});
