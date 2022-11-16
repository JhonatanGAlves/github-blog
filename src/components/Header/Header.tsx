import { HeaderContainer } from "./styles";

import logo from "../../assets/logo.svg";
import imgLeftEffect from "../../assets/bg-left-effect.svg";
import imgRightEffect from "../../assets/bg-right-effect.svg";

export const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <img src={imgLeftEffect} />
      <img src={logo} alt="Logo image" style={{ marginTop: -78 }} />
      <img src={imgRightEffect} />
    </HeaderContainer>
  );
};
