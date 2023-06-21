import { API_URL } from "./api";
import { AuthResponse } from "./models/AuthResponse";
import axios, { AxiosResponse } from "axios";

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return axios.post<AuthResponse>(`${API_URL}/auth`, { username, password });
  }
}
