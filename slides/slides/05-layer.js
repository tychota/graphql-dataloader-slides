import React from "react";
import { Slide, Heading, Image } from "spectacle";
import { NotesMarkdown } from "../utils";

module.exports = (image, title, note) => (
  <Slide>
    <Heading size={2}>{title}</Heading>
    <Image src={image} height="400" margin="40px 0 20px" />
    <NotesMarkdown>{note}</NotesMarkdown>
  </Slide>
);
