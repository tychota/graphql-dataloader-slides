import React from "react";
import { Slide, Layout, Fill, Heading, Text, Appear } from "spectacle";
import { NotesMarkdown } from "../utils";

const gutter = "25px";

module.exports = (
  <Slide>
    <Heading size={2}>The problems</Heading>
    <Layout>
      <Appear>
        <Fill>
          <Text
            margin={`40px ${gutter} 0 0`}
            className="fa fa-list"
            style={{ fontSize: "4rem" }}
            aria-hidden="true"
            textColor="red"
          />
          <Text margin={`5px ${gutter} 0 0`} textAlign="center">
            Unmaintenable custom routes
          </Text>
        </Fill>
      </Appear>
      <Appear>
        <Fill>
          <Text
            margin={`40px ${gutter} 0 0`}
            className="fa fa-scissors"
            style={{ fontSize: "4rem" }}
            aria-hidden="true"
            textColor="red"
          />
          <Text margin={`5px ${gutter} 0 0`} textAlign="center">
            Code hard to test/split/maintain
          </Text>
        </Fill>
      </Appear>
      <Appear>
        <Fill>
          <Text
            margin={`40px ${gutter} 0 0`}
            className="fa fa-hourglass-start"
            style={{ fontSize: "4rem" }}
            aria-hidden="true"
            textColor="red"
          />
          <Text margin={`5px ${gutter} 0 0`} textAlign="center">
            Difficult to optimize
          </Text>
        </Fill>
      </Appear>
    </Layout>
    <NotesMarkdown>
      {`# Les problèmes

Le premier default que je remarque avec des apis REST, c'est qu'il est **très difficile de rester REST.**
Au bout de quelques semaines de projet, c'est déjà l'avalanche de "custom endpoint".

GraphQL résout ceci en ayant **un endpoint** et un **système de type** qui permet de créer une grande combinaison de possibilité.

Mais le système de resolvers peut **paraître complexe** au nouveau developeur GraphQl:
 il est simple de protèger une route REST, mais comment faire ça en GraphQL ?

**SHORT BREAK** 

Le deuxième default est que bien souvent le code de la vue est fortement lié au code de l'ORM et
 qu'il est **difficile de tester** de façon unitaire le code. Strongloop a écrit un article  nommé 
 "hacker don't test, hacker don't mock".

Comme le code est fortement couplé, il est également difficile de **changer la data sans changer la vue**, 
ou d'effectuer d'autres refactoring de ce genre.

**SHORT BREAK**

Enfin, le dernier default est l'optimisation des performances. Un bon ORM, bien utilisé, génère des appels
 optimals dans 90% du temps. Mais dans les dix 10% restants, comment faire pour générer par exemple l'appel
 specifique postgres utilisant du JSONB, ou faisant appel à un index GIST.
      `}
    </NotesMarkdown>
  </Slide>
);
