import glob from "glob";
import fs from "fs";
import path from "path";

// loop over types and import the contents
const typeDefs = [];
glob.sync("**/*.type.gql", { cwd: __dirname }).forEach(filename => {
  const filePath = path.join(__dirname, filename);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  typeDefs.push(fileContent);
});

import BammerResolver from "./Bamer/Bamer.resolvers";
import BookResolver from "./Book/Book.resolvers";
import QueryResolver from "./Query/Query.resolvers";
import MutationResolver from "./Mutation/Mutation.resolvers";

const resolvers = {
  ...BammerResolver,
  ...BookResolver,
  ...QueryResolver,
  ...MutationResolver
};

import { makeExecutableSchema } from "graphql-tools";
// create a schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
