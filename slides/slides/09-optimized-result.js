import React from "react";
import { Slide, Heading, Image } from "spectacle";
import { NotesMarkdown } from "../utils";
import Terminal from "spectacle-terminal";

const colorsLog = {
  cyan: "#7FC1CA",
  blue: "#83AFE5",
  purple: "#9A93E1",
  pink: "#D18EC2",
  red: "#DF8C8C",
  orange: "#F2C38F",
  yellow: "#DADA93",
  green: "#A8CE93"
};

const colorLogCatgeories = {
  Friends: colorsLog.cyan,
  Cats: colorsLog.blue,
  Dogs: colorsLog.pink,
  Hats: colorsLog.red
};

const LogLine = ({ type, ID }) => (
  <div>
    <span style={{ color: colorsLog.orange }}>2017-07-10 06:51</span>
    {"     "}
    <span style={{ color: colorsLog.green }}>(debug)</span>
    {"     "}
    <span style={{ color: colorLogCatgeories[type] }}>
      Loading {type} with ID: {ID}
    </span>
  </div>
);

module.exports = (
  <Slide>
    <Heading size={2}>An optimized version</Heading>
    <Terminal
      title="CatsDogsHatsStatistic"
      output={[
        <div style={{ color: "#fff", fontSize: "1.4em" }}>
          yarn start
        </div>,
        <div style={{ color: "#ccc", fontSize: "1.4em" }}>
          $ yarn db:migrate && node ./build/main.js
        </div>,
        <div style={{ fontSize: "1.4em" }}>
          <LogLine type="Friends" ID="3,2,5,7,8,10,13,12" />
          <LogLine type="Cats" ID="12,15,18,11,17,19,27" />
          <LogLine
            type="Hats"
            ID="1,3,5,15,51,7,6,8,12,13,14,19,20,21,24,25,31 ..."
          />
          <LogLine type="Dogs" ID="17,28,14" />
        </div>
      ]}
    />
    <NotesMarkdown />
  </Slide>
);
