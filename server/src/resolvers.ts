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
  },
};