import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel, AuthorModel, ModuleModel } from "../models"

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  /**
   * Fetches track data for the home page
   * @returns Track object
   */
  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }

  /**
   * Fetches author data by author ID
   * @param authorId 
   * @returns Author object
   */
  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }

  /**
   * Fetches track data by track ID
   * @param trackId 
   * @returns Track object
   */
  getTrack(trackId: string) {
    return this.get<TrackModel>(`track/${trackId}`);
  }

  /**
   * Fetches module data by module ID
   * @param moduleId 
   * @returns Track object
   */
  getTrackModules(trackId: string) {
    return this.get<ModuleModel[]>(`track/${trackId}/modules`);
  }
}