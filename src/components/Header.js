import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import NavDropDown from "./NavDropDown";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12.6rem;

  @media ${({ theme }) => theme.breakpoints.xl} {
    height: 10rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: column;
    justify-content: space-around;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: row;
    border: 1px solid red;
  }
`;

const TextContainer = styled.div`
  text-align: right;
  width: 49.5rem;

  @media screen and (max-width: 1360px) {
    width: 45rem;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 34%;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 40rem;
    text-align: center;
    margin: 1rem 0;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    text-align: left;
    width: 33rem;
  }
`;

const Name = styled.a`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.luloBold};
  color: ${({ theme }) => theme.colors.pink};
  text-align: right;
  letter-spacing: 0;
  margin-right: -0.9rem;

  @media ${({ theme }) => theme.breakpoints.xl} {
    font-size: 2.6rem;
  }
`;

const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.futuraBook};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: 0.22rem;
  margin-top: 0.7rem;
  margin-right: -0.4rem;

  @media ${({ theme }) => theme.breakpoints.xl} {
    font-size: 1rem;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  padding-right: 3rem;

  @media screen and (max-width: 1360px) {
    padding-right: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    padding-right: 0.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${(props) =>
    props.href == props.pathname
      ? props.theme.colors.pink
      : props.theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.luloBold};
  font-size: 1.2rem;
  letter-spacing: 0;
  padding: 0 1.5rem;
  transition: color 0.3s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.pink};
  }

  @media screen and (max-width: 1360px) {
    padding: 0 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    padding: 0 0.75rem;
    font-size: 1.1rem;
  }
`;

export default function Header() {
  const router = useRouter();

  return (
    <HeaderContainer>
      <TextContainer>
        <Link href="/" passHref>
          <Name>ANDREA WILSON</Name>
        </Link>
        <Title>PRODUCTION ARTIST / GRAPHIC DESIGNER</Title>
      </TextContainer>
      <NavDropDown />
      <NavContainer>
        <Link href="/" passHref>
          <NavLink>HOME</NavLink>
        </Link>
        <Link href="/production-art" passHref>
          <NavLink pathname={router.asPath}>PRODUCTION ART</NavLink>
        </Link>
        <Link href="/tatcha" passHref>
          <NavLink pathname={router.asPath}>TATCHA</NavLink>
        </Link>
        <Link href="/graphic-design" passHref>
          <NavLink pathname={router.asPath}>GRAPHIC DESIGN</NavLink>
        </Link>
        <Link href="/fine-art" passHref>
          <NavLink pathname={router.asPath}>FINE ART</NavLink>
        </Link>
        <Link href="/images/andrea-wilson-resume.pdf" passHref>
          <NavLink target="_blank" rel="noreferrer noopener">
            RESUME
          </NavLink>
        </Link>
      </NavContainer>
    </HeaderContainer>
  );
}
