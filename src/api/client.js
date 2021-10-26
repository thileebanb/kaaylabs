import axios from "axios";
import { baseUrl } from "../config";

const Api = {
  get(query) {
    return new Promise(async (resolve) => {
      try {
        const res = await axios(baseUrl + query);
        if (res.status === 200) {
          resolve({ ok: true, data: res.data });
        } else {
          resolve({ ok: false, data: null });
        }
      } catch (error) {
        resolve({ ok: false, data: null });
      }
    });
  },
};

export default Api;
