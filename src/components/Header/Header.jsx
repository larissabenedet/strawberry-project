import React from "react";
import { Title, Wrapper } from "./Header";

const Header = () => {
  return (
    <Wrapper>
      <Title red>
        It's all about <span>strawberrys</span>.
      </Title>
    </Wrapper>
  );
};

export default Header;
