import api from "./api";
import { AuthResponse } from "./models/AuthResponse";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/auth", { username, password });
  }
}
