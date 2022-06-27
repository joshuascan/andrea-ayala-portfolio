import styled from "styled-components";
import Header from "./Header";

const Border = styled.div`
  border: 1.9rem solid black;
`;

export default function Layout({ children }) {
  return (
    <Border>
      <Header />
      <main>{children}</main>
    </Border>
  );
}
