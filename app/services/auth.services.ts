import { IReg, IAuth } from "./../types/auth.types";
import axios from "axios";

const API_URL = process.env.API_AUTOHELP;

axios.defaults.baseURL = API_URL;

export const AuthServices = {
  async signUp(data: IReg) {
    return axios.post("/auth/signin", data, {
      headers: { "Content-Type": "application/json" },
    });
  },
  async signIn(data: IAuth) {
    return axios.post("/auth/signup", data, {
      headers: { "Content-Type": "application/json" },
    });
  },
};
