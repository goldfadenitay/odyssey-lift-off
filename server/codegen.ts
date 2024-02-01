import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // The location of your GraphQL schema
  schema: "./src/schema.ts",

  // Specifies what Codegen should generate and where
  generates: {

    // The output file for the generated TypeScript types
    "./src/types.ts": {

      // The plugins to use for generating types
      plugins: [
        "typescript", // is the base plugin needed to generate TypeScript types from our schema
        "typescript-resolvers" //  it will review our schema, consider the types and fields we've defined, and output the types we need to accurately describe what data our resolver functions use and return.
      ],

      // Additional configuration for the generated code
      config: {

        // Defines the TypeScript type for the context parameter in resolvers
        contextType: "./context#DataSourceContext",

        // Maps GraphQL types to TypeScript models
        mappers: {
          Track: "./models#TrackModel", // Maps 'Track' in GraphQL to 'TrackModel' in TypeScript
          Author: "./models#AuthorModel", // Maps 'Author' to 'AuthorModel'
          Module: "./models#ModuleModel" // Maps 'Module' to 'ModuleModel'
        },
      },
    },
  },
};

export default config;