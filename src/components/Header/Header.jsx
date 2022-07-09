import React from "react";
import { List, Title, Wrapper, Container } from "./Header";

const Header = ({ title, highlightedText, children, background }) => {
  return (
    <Wrapper background={background}>
      <Container>
        <Title highlightedText>
          {title} {highlightedText && <span>{highlightedText}</span>}
        </Title>
        {<List>{children}</List>}
        <button>Read more</button>
      </Container>
    </Wrapper>
  );
};

export default Header;
