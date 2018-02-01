import React from "react";
import { Slide, Layout, Fill, Heading, Text, Link } from "spectacle";
import { NotesMarkdown } from "../utils";

module.exports = (
  <Slide>
    <Heading size={2} fit>
      GraphQL js
    </Heading>
    <Heading size={2} fit>
      & Dataloader
    </Heading>
    <Heading size={3}>Break free with the right GraphQL structure</Heading>
    <Text>
      <Link href="https://github.com/tychota/graphql-dataloader">
        View the presentation on Github
      </Link>
    </Text>
    <NotesMarkdown>
      {`# Slide de titre

This presentation was initially made by Tycho Tatitscheff. He couldn't come to this meeting.

However, I need to mention him for the great work he has done on this subject.
You can find all these slides on **Github**.

I will post the link on the **Meetup** page.

These slides are under public domain **CC0** license, code examples are under **MIT** licence.
  `}
    </NotesMarkdown>
  </Slide>
);
