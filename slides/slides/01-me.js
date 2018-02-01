import React from "react";
import { Slide, Image, Heading, Text, Link } from "spectacle";
import { NotesMarkdown } from "../utils";
import images from "../images";

module.exports = (
  <Slide>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 60
      }}
    >
      <div>
        <Heading size={2}>About Me</Heading>
        <Heading size={3} margin="40px auto 20px">
          Thomas Pucci
        </Heading>
        <Text size={2}>
          <Link href="https://twitter.com/Thomas_Pucci">@Thomas_Pucci</Link>
        </Text>
      </div>
      <div>
        <Heading size={2}>Thanks to</Heading>
        <Heading size={3} margin="40px auto 20px">
          Tycho Tatitscheff
        </Heading>
        <Text size={2}>
          <Link href="https://twitter.com/TychoTa">@TychoTa</Link>
        </Text>
      </div>
    </div>
    <Image src={images.thomas} height="85" margin="0px auto 20px" />
    <Image src={images.bam} height="85" margin="0px auto 20px" />
    <Image src={images.tycho} height="85" margin="0px auto 20px" />
    <NotesMarkdown>
      {`# Who am I ?

My name is Thomas Pucci
As I told you before I made this presentation with my coworker Tycho.
We are both **mobile developpers at BAM**. We specialised in mobile app development.

You can contact me on Twitter :)

I started to get to know GraphQL about 8 month ago.
Since then I have been working on our first project at BAM which uses GraphQL.

This is a huge project. It is now in production. And we learnt a lot dealing with Apollo :)

**-> NO BREAK <-** 
  `}
    </NotesMarkdown>
  </Slide>
);
