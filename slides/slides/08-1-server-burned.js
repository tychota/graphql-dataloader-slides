import React from "react";
import { Slide, Heading, Image } from "spectacle";
import { NotesMarkdown } from "../utils";
import images from "../images";

module.exports = (
  <Slide>
    <Heading size={2}>OMG Server Burned</Heading>
    <Image
      src={images.serverBurned}
      height="400"
      margin="40px 0 20px"
    />
    <NotesMarkdown>
      The server burned ... It is called the N+1 problem
    </NotesMarkdown>
  </Slide>
);
