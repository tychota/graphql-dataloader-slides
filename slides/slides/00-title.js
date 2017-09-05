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
    <Heading size={3}>
      Break free with the right GraphQL structure
    </Heading>
    <Text>
      <Link href="https://github.com/tychota/graphql-dataloader">
        View the presentation on Github
      </Link>
    </Text>
    <NotesMarkdown>
      {`# Slide de titre

Vous pouvez retrouver les slides sur mon **Github**.

Je posterais le lien sur le groupe du **Meetup**.

Les slides sont sous licence **CC0** (domain public), les exemples de code sous licence **MIT**.
  `}
    </NotesMarkdown>
  </Slide>
);
