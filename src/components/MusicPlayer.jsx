import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import axios from "axios";
import { useSpotifyContext } from "../store/SpotifyContext";

export default function MusicPlayer() {
  const {
    token,
    player,
    scope,
    logout,
    is_paused,
    current_track,
    AUTH_ENDPOINT,
    CLIENT_ID,
    REDIRECT_URI,
    RESPONSE_TYPE,
    img,
  } = useSpotifyContext();

  return (
    <Grid xs={3} position={"relative"}>
      {!token ? (
        <Grid
          item
          padding={"26px"}
          paddingRight={"28px"}
          sx={{ display: { xs: "block", sm: "block", md: "block" } }}
        >
          {" "}
          <div className="tooltip2">
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scope}`}
            >
              {
                <img
                  height={"27px"}
                  src={process.env.PUBLIC_URL + "./pngegg.png"}
                />
              }
            </a>{" "}
            <span className="tooltiptext">Login to Premium</span>
          </div>
        </Grid>
      ) : (
        <Grid
          item
          padding={"5px"}
          paddingRight={"10px"}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          {!is_paused ? (
            <Button width={"30px"}>
              <PauseIcon
                onClick={() => player.pause()}
                sx={{ color: "rgb(191,178,232)" }}
              ></PauseIcon>
            </Button>
          ) : (
            <Button width={"30px"}>
              <PlayArrowIcon
                onClick={() => player.resume()}
                sx={{ color: "rgb(191,178,232)" }}
              ></PlayArrowIcon>
            </Button>
          )}
          <Button
            minwidth={"30px"}
            maxwidth={"30px"}
            onClick={() => {
              player.nextTrack();
            }}
          >
            <SkipNextIcon
              sx={{
                color: "rgb(191,178,232)",
              }}
            ></SkipNextIcon>
          </Button>
          <div className="tooltip2">
            <Button onClick={logout}>
              {img !== "" ? (
                <img height={"58px"} src={img} />
              ) : (
                <img
                  height={"27px"}
                  src={process.env.PUBLIC_URL + "./pngegg.png"}
                />
              )}
            </Button>
            <span className="tooltiptext-2">Logout</span>
          </div>
        </Grid>
      )}
    </Grid>
  );
}
