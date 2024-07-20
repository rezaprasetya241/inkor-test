import React from "react";
import { StyledHeader, StyleHeaderMenu } from "./Header.styles";
import Button from "../../atoms/Button/Button";
import { LogoNFT } from "../../../assets";
import { CiUser } from "react-icons/ci";

const HeaderComponent = () => {
  const onButtonClick = () => {};
  return (
    <StyledHeader>
      <img src={LogoNFT} alt="Logo" />
      <StyleHeaderMenu>
        <a href="#">Marketplace</a>
        <a href="#">Rankings</a>
        <a href="#">Connect a wallet</a>
        <Button onClick={onButtonClick}>
          <CiUser data-testid="ci-user-icon" />
          Sign Up
        </Button>
      </StyleHeaderMenu>
    </StyledHeader>
  );
};

export default HeaderComponent;
