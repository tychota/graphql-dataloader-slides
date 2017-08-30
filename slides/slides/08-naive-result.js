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
  Friend: colorsLog.cyan,
  Cat: colorsLog.blue,
  Dog: colorsLog.pink,
  Hat: colorsLog.red
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
    <Heading size={2}>OMG, server burned !</Heading>
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
          <LogLine type="Friend" ID="3" />
          <LogLine type="Friend" ID="2" />
          <LogLine type="Friend" ID="5" />
          <LogLine type="Friend" ID="7" />
          <LogLine type="Cat" ID="12" />
          <LogLine type="Hat" ID="1" />
          <LogLine type="Hat" ID="3" />
          <LogLine type="Friend" ID="8" />
          <LogLine type="Hat" ID="5" />
          <LogLine type="Friend" ID="10" />
          <LogLine type="Friend" ID="13" />
          <LogLine type="Cat" ID="15" />
          <LogLine type="Dog" ID="17" />
          <LogLine type="Friend" ID="12" />
          <LogLine type="Hat" ID="15" />
          <LogLine type="Hat" ID="51" />
          <LogLine type="Cat" ID="18" />
          <LogLine type="Hat" ID="5" />
          <LogLine type="Hat" ID="7" />
          <LogLine type="Hat" ID="6" />
          <LogLine type="Hat" ID="8" />
          <LogLine type="Cat" ID="11" />
          <LogLine type="Hat" ID="5" />
          <LogLine type="Hat" ID="12" />
          <LogLine type="Hat" ID="13" />
          <LogLine type="Hat" ID="14" />
          <LogLine type="Hat" ID="19" />
          <LogLine type="Cat" ID="17" />
          <LogLine type="Hat" ID="20" />
          <LogLine type="Hat" ID="21" />
          <LogLine type="Cat" ID="19" />
          <LogLine type="Hat" ID="24" />
          <LogLine type="Hat" ID="25" />
          <LogLine type="Hat" ID="31" />
          <LogLine type="Cat" ID="25" />
          <LogLine type="Dog" ID="28" />
          <LogLine type="Hat" ID="32" />
          <LogLine type="Hat" ID="33" />
          <LogLine type="Hat" ID="37" />
          <LogLine type="Cat" ID="27" />
          <LogLine type="Hat" ID="33" />
          <LogLine type="Hat" ID="37" />
          <LogLine type="Dog" ID="14" />
          <LogLine type="Hat" ID="77" />
          <LogLine type="Hat" ID="78" />
          <LogLine type="Hat" ID="61" />
          <LogLine type="Hat" ID="66" />
        </div>
      ]}
    />
    <NotesMarkdown />
  </Slide>
);
