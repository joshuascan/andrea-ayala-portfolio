import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
  cursor: default;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

button {
  border: none;
}

:root {
  --swiper-navigation-color: rgba(0,0,0,0.15);
  --swiper-pagination-color: rgba(0,0,0,0.6);
}

.swiper-button-prev, .swiper-button-next {
  transition: color 0.3s ease-in-out;

  :hover {
  color: rgba(0,0,0,0.4);
  }
}
`;

export default GlobalStyles;
