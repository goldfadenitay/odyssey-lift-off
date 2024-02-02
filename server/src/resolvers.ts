import { GraphQLError } from 'graphql';
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
     * get a single track by ID, for the track page
     * @param _ 
     * @param { id } 
     * @param { dataSources } 
     * @returns return a single track
     */
    track: (_, {id}, {dataSources}) => {
      return dataSources.trackAPI.getTrack(id);
    },

    /**
     * get a single module by ID for the module page
     * @param _ 
     * @param { id } - The module id
     * @param { dataSources } - The data sources
     * @returns a single module
     */
    getModule: (_, {id}, {dataSources}) => {
      return dataSources.trackAPI.getModule(id)
    }
  },
  Mutation: {
    /**
     * Increment track views
     * @param _ 
     * @param { trackId } 
     * @param { dataSources } 
     * @returns return a single track
     */
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id)
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        }
      } catch (err) {
        if (err instanceof GraphQLError) {
          return {
            code: (err.extensions.response as { status: number }).status,
            success: false,
            message: (err.extensions.response as { body: string }).body,
            track: null
          }
        }

        return {
          code: 500,
          success: false,
          message: 'Internal Server Error',
          track: null,
        }
      }
    }
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