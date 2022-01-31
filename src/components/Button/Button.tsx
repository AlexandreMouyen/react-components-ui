import React from "react";

import "./Button.css";

export interface ButtonProps {
  label: string;
}

function Button(props: ButtonProps) {
  const { label } = props;

  return <button type="button">{label}</button>;
}

export default Button;
