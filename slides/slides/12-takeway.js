import React from "react";
import {
  Slide,
  List,
  ListItem,
  Appear,
  S,
  Heading,
  Text
} from "spectacle";
import { NotesMarkdown } from "../utils";

const inline = { display: "inline", margin: 0 };

module.exports = (
  <Slide>
    <Heading size={2}>Topic</Heading>
    <List margin="40px auto 0px">
      <Appear>
        <ListItem>
          <Text style={inline} textColor="blue">
            Efficiency
          </Text>
          {" and "}
          <Text style={inline} textColor="green">
            Maintainability
          </Text>{" "}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {"No need for an "}
          <Text style={inline} textColor="red">
            ORM
          </Text>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <Text style={inline} textColor="yellow">
            Dataloader
          </Text>
          {" improves performance for free"}
        </ListItem>
      </Appear>
    </List>
    <NotesMarkdown>
      {`# Topic

Combien d'entre vous étiez présent au dernier Meetup GraphQL, chez dailymotion ?

**MEDIUM BREAK** 

Au dernier meetup, j'avais présenté comment faire une application avec 
Apollo Client et Exponent, avec un long (trop ?) livecoding.

**SHORT BREAK** 

Promis, cette fois plus de live coding. :)

Cette fois ci, on va s'interesser ensemble au coté serveur.

A BAM, jusqu'à maintenant on utilisais beaucoup de loopback pour faire nos API, mais ceci présentait certains problèmes.
  `}
    </NotesMarkdown>
  </Slide>
);
