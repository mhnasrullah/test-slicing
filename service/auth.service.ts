import { AxiosResponse } from "axios";
import fetchAxios from "@/lib/axios";

const login = (payload: {
  email: string;
  password: string;
}): Promise<AxiosResponse> =>
  fetchAxios.post("/api/login", {
    email: payload.email,
    password: payload.password,
  });

export const authService = {
  login,
};
