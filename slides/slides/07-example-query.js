import React from "react";
import { Slide, Heading, Image } from "spectacle";
import { NotesMarkdown } from "../utils";
import images from "../images";

module.exports = (
  <Slide>
    <Heading size={2}>An example query</Heading>
    <Image
      src={images.exampleQuery}
      height="400"
      margin="40px 0 20px"
    />
    <NotesMarkdown />
  </Slide>
);
