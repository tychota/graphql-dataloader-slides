import React from "react";
import { Slide, Heading, BlockQuote, Quote, Cite, Appear } from "spectacle";
import { NotesMarkdown } from "../utils";

module.exports = (
  <Slide>
    <Heading size={2}>Coworker Quote</Heading>
    <Appear>
      <BlockQuote>
        <Quote>
          Before this structure, a ticket took us a day to complete ; after the
          change, only 40 minutes.
        </Quote>
        <Cite>Guillaume Diallo-Mulliez</Cite>
      </BlockQuote>
    </Appear>
    <NotesMarkdown>
      {`# Quote

Je vais vous montrer la structure que le projet en production a adoptée.

Mais avant ceci, je vais vous raconté une histoire.

> Je n'étais pas staffé sur le projet en GraphQL, et un collègue, Thomas, vint me voir pour avoir mon avis sur l'organisation.

> Nous avons pair programmé une heure, puis il a exispliqué le concept à l'équipe.

> Une semaine plus trad, voilà son feedback.

**LONG PAUSE**

Ceci montre l'impact de bien organiser son serveur GraphQL.

      `}
    </NotesMarkdown>
  </Slide>
);
