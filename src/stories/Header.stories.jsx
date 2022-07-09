import React from "react";

import Header from "../components/Header/Header.jsx";
import Background from "../public/assets/strawberry-header.jpg";

export default {
  title: "Header",
  component: Header,
};

const list = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam consequatur quasi ex non aut",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam consequatur quasi ex non aut",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam consequatur quasi ex non aut",
];

export const usage = () => (
  <Header
    title="It's all about"
    highlightedText="strawberrys"
    background={Background}
  >
    {list.map((text, id) => {
      return <li key={id}>{text}</li>;
    })}
  </Header>
);
