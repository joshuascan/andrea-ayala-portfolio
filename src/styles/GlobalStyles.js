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
`;

export default GlobalStyles;
