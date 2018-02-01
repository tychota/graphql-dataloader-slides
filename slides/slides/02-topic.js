import React from "react";
import { Slide, List, ListItem, Appear, S, Heading, Text } from "spectacle";
import { NotesMarkdown } from "../utils";

const inline = { display: "inline", margin: 0 };

module.exports = (
  <Slide>
    <Heading size={2}>Topic</Heading>
    <List margin="40px auto 0px">
      <Appear>
        <ListItem>
          Focus on{" "}
          <Text style={inline} textColor="blue">
            server side
          </Text>{" "}
          {" "}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Aims to solve some{" "}
          <Text style={inline} textColor="red">
            problems !
          </Text>
        </ListItem>
      </Appear>
    </List>
    <NotesMarkdown>
      {`# Topic

**SHORT BREAK** 

This presentation focuses on GraphQL on server side; we will not be talking about clients.
At BAM, we used for a long time Loopback API and we often face problems.

`}
    </NotesMarkdown>
  </Slide>
);
