import { API_URL } from "./api";
import { AuthResponse } from "./models/AuthResponse";
import axios, { AxiosResponse } from "axios";

type UserData = {
  email: string;
  phone: string;
  password: string;
  first_name: string;
  last_name: string;
  surname: string;
};

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return axios.post<AuthResponse>(
      `${API_URL}/auth`,
      { username, password },
      { withCredentials: true }
    );
  }

  static async register(
    userData: UserData
  ): Promise<AxiosResponse<AuthResponse>> {
    return axios.post<AuthResponse>(
      `${API_URL}/register`,
      { ...userData },
      { withCredentials: true }
    );
  }
}
