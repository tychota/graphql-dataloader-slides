import React from "react";
import { Notes, Text, Markdown } from "spectacle";

export const NotesMarkdown = ({ children }) =>
  <Notes>
    <Text>
      <Markdown>
        {children}
      </Markdown>
    </Text>
  </Notes>;
