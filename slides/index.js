import React from "react";
// For a complete API docs see https://github.com/FormidableLabs/spectacle#tag-api
import CodeSlide from "@bam.tech/spectacle-code-slide";
import render, { Presentation } from "melodrama";

// --- THEME ---
// Import and create the theme you want to use.
import createTheme from "spectacle-theme-nova";
const theme = createTheme("nova", {
  components: { text: { fontSize: "2rem" } }
});

/* Font Awesome */
import "./assets/fonts/font-awesome.css";

// Syntax
// ---------------
import "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
/* Custom Nova syntax highlighting */
import "spectacle-theme-nova/syntax/prism.nova.css";
import "./custom.css";
import "./syntax/prism-javascript";
import "./syntax/prism-graphql";

// --- IMAGES ---
// Import/require your images and add them to `images`
// for easy access and preloading.
import images from "./images.js";

// --- PRESENTATION ---
const Root = () => (
  <Presentation theme={theme}>
    {require("./slides/00-title")}
    {require("./slides/01-me")}
    {require("./slides/02-topic")}
    {require("./slides/03-problems")}
    {require("./slides/05-layer")(
      images.layer,
      "Three Layers Approach",
      `# Layer 1

There is three layers:
- the presentation layer
- the business layer
- the data layer
    `
    )}
    {require("./slides/05-layer")(
      images.layer0,
      "The presentation layer",
      `# The presentation layer
    `
    )}
    <CodeSlide
      transition={[]}
      lang="javascript"
      code={require("raw!./assets/code/server.js")}
      ranges={[
        { loc: [0, 270], title: "Server.js" },
        { loc: [0, 5], note: "Koa import" },
        { loc: [12, 19], note: "Router + koaBody" },
        { loc: [46, 49], note: "Use router" },
        { loc: [50, 52], note: "Launch the app" },
        { loc: [6, 8], title: "Add GraphQL" },
        { loc: [29, 31], note: "Import the schema" },
        { loc: [32, 45], note: "Add the graphql route" },
        { loc: [37, 43], note: "Pass a context with ..." },
        { loc: [35, 37], note: "... user and role ..." },
        { loc: [20, 28], note: "... deduced from JWT token" }
      ]}
    />
    {require("./slides/05-layer")(
      images.layer1,
      "Schema",
      `# Schema"
    `
    )}
    <CodeSlide
      transition={[]}
      lang="graphql"
      code={require("raw!./assets/code/Query.gql")}
      ranges={[
        { loc: [0, 18], title: "Query.gql" },
        { loc: [9, 13], note: "cats" }
      ]}
    />
    <CodeSlide
      transition={[]}
      lang="javascript"
      code={require("raw!./assets/code/Query.js")}
      ranges={[
        { loc: [0, 270], title: "Query.js" },
        { loc: [0, 4], note: "Import business layer" },
        { loc: [13, 19], note: "Delegate the load to business layer" }
      ]}
    />
    <CodeSlide
      transition={[]}
      lang="javascript"
      code={require("raw!./assets/code/schema.js")}
      ranges={[
        { loc: [0, 270], title: "Schema.js" },
        { loc: [0, 11], note: "Concatenate *.gql files" },
        { loc: [12, 27], note: "Build resolver map" },
        { loc: [28, 33], note: "Build Schema" }
      ]}
    />
    {require("./slides/05-layer")(
      images.layer2,
      "The Business layer",
      `# The Business layer (without dataloader)
    `
    )}
    <CodeSlide
      transition={[]}
      lang="javascript"
      code={require("raw!./assets/code/CatBusiness.js")}
      ranges={[
        { loc: [0, 270], title: "CatBusiness.js" },
        { loc: [8, 10], note: "A ES6 class, nothing special" },
        { loc: [39, 45], note: "That expose a load function ..." },
        { loc: [46, 50], note: "... and a loadAll function" },
        {
          loc: [40, 41],
          note: "In the load function, check that id is not null"
        },
        { loc: [41, 42], note: "Then call the data layer" },
        { loc: [42, 44], note: "if data, create a new Cat()" },
        { loc: [9, 23], note: "this invoque constructor" },
        { loc: [10, 12], note: "Check access" },
        { loc: [29, 38], note: "With a viewerCanSee function" },
        { loc: [13, 17], note: "whitelist some properties" },
        { loc: [18, 22], note: "and other based on role" },
        { loc: [1, 7], note: "based on external utility function" }
      ]}
    />
    {require("./slides/05-layer")(
      images.layer4,
      "The Data layer",
      `# The Data layer
    `
    )}
    <CodeSlide
      transition={[]}
      lang="javascript"
      code={require("raw!./assets/code/CatDataAccess.js")}
      ranges={[
        { loc: [0, 270], title: "CatDataAccess.js" },
        { loc: [0, 1], note: "Import knex connector" },
        { loc: [3, 9], note: "Build custom query to get one" },
        { loc: [30, 36], note: "... a list of" },
        { loc: [27, 30], note: "... or all cats" },
        { loc: [15, 27], note: "... or even a fuzzy search engine" }
      ]}
    />
    {require("./slides/07-example-query")}
    {require("./slides/08-naive-result")}
    {require("./slides/08-1-server-burned")}
    {require("./slides/10-explanation-1")}
    {require("./slides/11-explanation-2")}
    {require("./slides/09-optimized-result")}
    {require("./slides/05-layer")(
      images.layer3,
      "Dataloaders",
      `# Dataloaders
    `
    )}
    <CodeSlide
      transition={[]}
      lang="javascript"
      code={require("raw!./assets/code/CatBusiness.dataloader.js")}
      ranges={[
        { loc: [0, 270], title: "CatBusiness.js" },
        { loc: [0, 1], note: "We import dataloader" },
        { loc: [31, 48], note: "We expose a getLoaders function" },
        { loc: [39, 43], note: "... that create a dataloader" },
        {
          loc: [33, 39],
          note: "... and an utility to prime dataloader"
        }
      ]}
    />
    <CodeSlide
      transition={[]}
      lang="javascript"
      code={require("raw!./assets/code/server.dataloader.js")}
      ranges={[
        { loc: [0, 270], title: "server.js with dataloader" },
        { loc: [31, 33], note: "we import dataloader" },
        { loc: [39, 48], note: "we get every loader by name" },
        { loc: [48, 54], note: "... and pass this to context" }
      ]}
    />
    <CodeSlide
      transition={[]}
      lang="javascript"
      code={require("raw!./assets/code/CatBusiness.dataloader.js")}
      ranges={[
        { loc: [0, 270], title: "CatBusiness.js" },
        { loc: [63, 64], note: "... so we can load with dataloader" },
        { loc: [70, 71], note: "... and prime loaders" }
      ]}
    />
    {require("./slides/04-quote")}
    {require("./slides/12-takeway")}
    {require("./slides/13-next-steps")}
  </Presentation>
);

render(Root, { images });
