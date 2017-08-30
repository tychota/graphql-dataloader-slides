import React from "react";
import { Slide, Heading, Image } from "spectacle";
import { NotesMarkdown } from "../utils";
import images from "../images";

module.exports = (
  <Slide>
    <Heading size={2}>What if we had this?</Heading>
    <Image
      src={images.dataloaderImplementation}
      height="400"
      margin="40px 0 20px"
    />
    <NotesMarkdown />
  </Slide>
);
