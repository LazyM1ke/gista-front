import api from "./api";
import { SectionsResponse } from "./models/SectionsResponse";
import { AxiosResponse } from "axios/index";

export default class SectionService {
  static async fetchSections(): Promise<AxiosResponse<SectionsResponse>> {
    return api.get<SectionsResponse>("/section");
  }
}
