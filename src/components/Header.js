import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12.6rem;
`;

const TextContainer = styled.div`
  text-align: right;
  width: 49.5rem;
`;

const Name = styled.a`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.luloBold};
  color: ${({ theme }) => theme.colors.pink};
  text-align: right;
  letter-spacing: 0;
  margin-right: -0.9rem;
`;

const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.futuraBook};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: 0.22rem;
  margin-top: 0.7rem;
  margin-right: -0.4rem;
`;

const NavContainer = styled.nav`
  display: flex;
  padding-right: 3rem;
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
