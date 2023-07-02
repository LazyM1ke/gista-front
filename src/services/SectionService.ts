import api, { API_URL } from "./api";
import {
  addSubSectionResponse,
  deleteSubSectionResponse,
  SectionsResponse,
} from "./models/SectionsResponse";
import { AxiosResponse } from "axios/index";

export default class SectionService {
  static async fetchSections(): Promise<AxiosResponse<SectionsResponse>> {
    return api.get<SectionsResponse>("/section");
  }

  static async addSubSection(
    name: string,
    parentId: string | undefined
  ): Promise<AxiosResponse<addSubSectionResponse>> {
    return api.post(`${API_URL}/section`, {
      name: name,
      parent_id: parentId,
    });
  }

  static async deleteSubSection(
    subSectionId: string
  ): Promise<AxiosResponse<deleteSubSectionResponse>> {
    return api.delete(`${API_URL}/section`, {
      data: {
        id: subSectionId,
      },
    });
  }

  static async updateSubSection(
    id: string | undefined,
    newName: string
  ): Promise<AxiosResponse<deleteSubSectionResponse>> {
    return api.put(`${API_URL}/section`, {
      id: id,
      new_name: newName,
    });
  }
}
