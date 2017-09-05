import React from "react";
import { Slide, Layout, Fill, Heading, Text, Link } from "spectacle";
import { NotesMarkdown } from "../utils";

module.exports = (
  <Slide>
    <Heading size={2}>Next Steps</Heading>
    <Text>
      <Link href="https://github.com/tychota/graphql-dataloader">
        Link to the slides (tychota/graphql-dataloader)
      </Link>
    </Text>
    <Text>
      <Link href="https://bamtech.gitbooks.io/dev-standards/backend/graphql-js/getting-started-with-apollo-server-dataloader-knex.mo.html">
        Getting started with apollo server dataloader knex
      </Link>
    </Text>
    <Text>
      <Link href="https://github.com/bamlab/bam-api">
        BAM API (bamlab/bam-api)
      </Link>
    </Text>
    <Text margin="20px auto 0px">
      <Layout>
        <Fill />
        <Fill>
          <Text>Slides</Text>
          <img
            src="http://i.creativecommons.org/p/zero/1.0/88x31.png"
            style={{ borderStyle: "none" }}
            alt="CC0"
          />
        </Fill>
        <Fill>
          <Text>Code</Text>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f8/License_icon-mit-88x31-2.svg"
            style={{ borderStyle: "none" }}
            alt="MIT"
          />
        </Fill>
        <Fill />
      </Layout>
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
