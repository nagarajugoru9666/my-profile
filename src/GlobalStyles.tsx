import React from "react";
import { GlobalStyles as GlobalStylesMui } from "@mui/material";
import { css } from "@emotion/react";

const GlobalStyles = () => (
  <GlobalStylesMui
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        height: auto;
        border-radius: 8px; 
      }
      h1,h2,h3,h4,h5,h6{
        margin-bottom: 1rem;
      }
    `}
  />
);

export default GlobalStyles;
