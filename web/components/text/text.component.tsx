import React from "react";
import { IStyles, ITextProps } from "./text.model";
import styles from "./text.module.scss";

export const Text = ({
  textAlign = "left",
  color,
  size,
  text,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  html,
}: ITextProps) => {
  const textStyles: IStyles = {
    textAlign,
    color,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };

  const parse = require('html-react-parser');
  text = html?parse(text):text;
  const textClass = styles[size] + (text==""?" "+styles.newline:"") + (html?" "+styles.markup:"");

  if (size === "H1") {
    return (
      <h1 className={textClass} style={textStyles}>
        {text}
      </h1>
    );
  } else if (size === "H2") {
    return (
      <h2 className={textClass} style={textStyles}>
        {text}
      </h2>
    );
  } else {
    return (
      <p className={textClass + " text-p"} style={textStyles}>
        {text}
      </p>
    );
  }
};
