import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel, AuthorModel } from "../models"

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
}