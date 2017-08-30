import React from "react";
import { Slide, Heading } from "spectacle";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    start: 24 * 60 + 21,
    end: 25 * 60 + 2
  }
};

module.exports = (
  <Slide>
    <Heading size={2}>N+1 problem (video)</Heading>
    <YouTube videoId="UBGzsb2UkeY" opts={opts} />
  </Slide>
);
