import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    /**
     * Resolver for tracksForHome. Fetches track data from the TrackAPI.
     * @param _ 
     * @param __ 
     * @param { dataSources } 
     * @returns a Track object
     */
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    
    /**
     *  get a single track by ID, for the track page
     * @param _ 
     * @param { id } 
     * @param { dataSources } 
     * @returns return a single track
     */
    track: (_, {id}, {dataSources}) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    /**
     * Resolver for the 'author' field in a Track. Fetches author data using the authorId.
     * @param { authorId } 
     * @param _ 
     * @param { dataSources } 
     * @returns an Author object
     */
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId)
    },

    /**
     * Resolver for the 'module' field in a Track. Fetches module data using the moduleId.
     * @param { modelId } 
     * @param _ 
     * @param { dataSources } 
     * @returns a Module object
     */
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id)
    }
  },
};