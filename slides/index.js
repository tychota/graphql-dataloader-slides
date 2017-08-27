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
const Root = () =>
  <Presentation theme={theme}>
    {require("./slides/00-title")}
    {require("./slides/01-me")}
    {require("./slides/02-topic")}
    {require("./slides/03-problems")}
    {require("./slides/04-quote")}
    {require("./slides/05-layer")(
      images.layer,
      "Three Layer Approach",
      `# Layer 1

There is three layer:
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
        { loc: [51, 54], note: "Use router" },
        { loc: [61, 63], note: "Launch the app" },
        { loc: [6, 8], title: "Add GraphQL" },
        { loc: [29, 31], note: "Import the schema" },
        { loc: [34, 56], note: "Launch the app" },
        { loc: [48, 50], note: "Pass a context with ..." },
        {
          loc: [39, 48],
          note: "... dataloaders (we will see about them later)"
        },
        { loc: [37, 39], note: "... user and role ..." },
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
      ranges={[{ loc: [0, 12], title: "Query.gql" }]}
    />
    <CodeSlide
      transition={[]}
      lang="javascript"
      code={require("raw!./assets/code/Query.js")}
      ranges={[
        { loc: [0, 270], title: "Query.js" },
        { loc: [0, 2], note: "Import business layer" },
        { loc: [14, 17], note: "Load with ctx and id" }
      ]}
    />
    <CodeSlide
      transition={[]}
      lang="javascript"
      code={require("raw!./assets/code/schema.js")}
      ranges={[
        { loc: [0, 270], title: "Schema.js" },
        { loc: [0, 11], note: "Concatenate *.gql files" },
        { loc: [12, 23], note: "Build resolver map" },
        { loc: [24, 29], note: "Build Schema" }
      ]}
    />
    {require("./slides/05-layer")(
      images.layer2,
      "The Business layer",
      `# The Business layer
    `
    )}
    {require("./slides/05-layer")(
      images.layer3,
      "Dataloaders",
      `# Dataloaders
    `
    )}
    {require("./slides/05-layer")(
      images.layer4,
      "The Data layer",
      `# The Data layer
    `
    )}
  </Presentation>;

render(Root, { images });
