import React from "react";
import { Slide, Image, Heading, Text, Link } from "spectacle";
import { NotesMarkdown } from "../utils";
import images from "../images";

module.exports = (
  <Slide>
    <Heading size={2}>About Me</Heading>
    <Heading size={3} margin="40px auto 20px">
      Tycho Tatitscheff
    </Heading>
    <Image src={images.bam} height="85" margin="0px auto 20px" />
    <Text size={2}>
      <Link href="https://twitter.com/TychoTa">@TychoTa</Link>
    </Text>
    <NotesMarkdown>
      {`# Qui suis je ?

Je m'appelle Tycho Tatitscheff.

Je suis **developpeur mobile à BAM**. Nous sommes spécialisés dans le developpement mobile.

Si vous souhaitez me contacter, je suis actif sur Twitter.

Concernant GraphQL, **cela fait un an et demi** que je suis la technologie. 
J'ai cocréé avec GraphCool **la première version de [learnapollo](https://www.learnapollo.com/)**.

Nous avons maintenant **un gros projet en production** avec GraphQL.

**-> NO BREAK <-** 
  `}
    </NotesMarkdown>
  </Slide>
);
