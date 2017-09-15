import koa from "koa";
// Import koa 2 router to mount /graphql
import koaRouter from "koa-router";
// Import koa 2 bodyparser
import koaBody from "koa-bodyparser";

// import graphqlKoa and graphql
import { graphqlKoa } from "graphql-server-koa";

// import jwt-verification
import koaJwt from "koa-jwt";

// create a new app
const app = new koa();
// create a new router, not really useful for now
const router = new koaRouter();

// use the body middleware, to decode the body of the request
app.use(koaBody());

// configure jwt middleware to connect to auth0, check the token and
const jwtConfig = {
  secret: "a really long secret",
  passthrough: true
};
app.use(koaJwt(jwtConfig));
// auth utils
import getViewerAndRoles from "../business/utils/auth";

// import the schema and mount it under /graphql
import schema from "../presentation/schema";
// get the dataloader for each request
import * as business from "../business";

router.post(
  "/graphql",
  graphqlKoa(async ctx => {
    // get the user and role from request
    const { user, roles } = await getViewerAndRoles(ctx.state.user);
    // build the data loader map, using reduce
    const dataloaders = Object.keys(
      business
    ).reduce((dataloaders, loaderKey) => {
      return {
        ...dataloaders,
        [loaderKey]: business[loaderKey].getLoaders()
      };
    }, {});
    // create a context for each request
    const context = { dataloaders, user, roles };
    return {
      schema: schema,
      context: context
    };
  })
);

// use the router routes and restrict the method
app.use(router.routes());
app.use(router.allowedMethods());

// start the app and listen to incoming request
app.listen(3000);
