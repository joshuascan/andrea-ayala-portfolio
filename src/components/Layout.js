import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Border = styled.div`
  border: 1.9rem solid black;
  border-bottom-width: 2.4rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    border: none;
  }
`;

export default function Layout({ children }) {
  return (
    <Border>
      <Header />
      <main>{children}</main>
      <Footer />
    </Border>
  );
}
