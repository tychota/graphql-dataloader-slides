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

import FriendResolver from "./Friend/Friend.resolvers";
import CatResolver from "./Cat/Cat.resolvers";
import DogResolver from "./Dog/Dog.resolvers";
import HatResolver from "./Hat/Hat.resolvers";
import QueryResolver from "./Query/Query.resolvers";
import MutationResolver from "./Mutation/Mutation.resolvers";

const resolvers = {
  ...FriendResolver,
  ...CatResolver,
  ...DogResolver,
  ...HatResolver,
  ...QueryResolver,
  ...MutationResolver
};

import { makeExecutableSchema } from "graphql-tools";
// create a schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
