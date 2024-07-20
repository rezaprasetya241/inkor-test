import React from "react";
import { StyledButton } from "./Button.styles";

interface PropsButton {
  children: React.ReactNode;
  onClick: (val?: any) => void;
}

const Button = ({ children, onClick }: PropsButton) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
export default Button;
