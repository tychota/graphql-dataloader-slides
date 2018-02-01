import React from "react";
import { Slide, Layout, Fill, Heading, Text, Appear } from "spectacle";
import { NotesMarkdown } from "../utils";

const gutter = "25px";

module.exports = (
  <Slide>
    <Heading size={2}>Experience</Heading>
    <Layout>
      <Appear>
        <Fill>
          <Text
            margin={`40px ${gutter} 0 0`}
            className="fa fa-folder-open"
            style={{ fontSize: "4rem" }}
            aria-hidden="true"
            textColor="cyan"
          />
          <Text margin={`5px ${gutter} 0 0`} textAlign="center">
            Our first GaphQL project at BAM
          </Text>
        </Fill>
      </Appear>
      <Appear>
        <Fill>
          <Text
            margin={`40px ${gutter} 0 0`}
            className="fa fa-calendar"
            style={{ fontSize: "4rem" }}
            aria-hidden="true"
            textColor="cyan"
          />
          <Text margin={`5px ${gutter} 0 0`} textAlign="center">
            Started 8 months ago
          </Text>
        </Fill>
      </Appear>
      <Appear>
        <Fill>
          <Text
            margin={`40px ${gutter} 0 0`}
            className="fa fa-code"
            style={{ fontSize: "4rem" }}
            aria-hidden="true"
            textColor="cyan"
          />
          <Text margin={`5px ${gutter} 0 0`} textAlign="center">
            80 000 lines of JS code
          </Text>
        </Fill>
      </Appear>
    </Layout>
    <NotesMarkdown>
      {`# Les problèmes

- **Staying on REST is hard** > after few months of one project, you may have a lot of customs routes and endpoints.
- GraphQL solve this problem with one **single endpoint** and a limitless of possibilities with its **type system**.
- One newcomer may find all this Resolvers system a bit tricky at the beginning.
- For example, it is easy to protect some endpoints in REST, but how to do this in GraphQL ?

**SHORT BREAK** 

- One other thing is that it is complicated to test your API when you are using an ORM.
- Unit testing an ORM is something necessary though
(read the article by strong loop titled "hack, don't test. hacker, don't mock")
- One other thing, if you want to change Data with an ORM, you likely need to change the view too.

**SHORT BREAK**

- Finally, a good ORM optimize your calls 90% of the time.
- The other 10%, you face huge difficulties and you end up making raw queries.
      `}
    </NotesMarkdown>
  </Slide>
);
