import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.div`
  margin: 0 auto;
`;

const NavContainer = styled.nav`
  display: flex;
  margin-top: 1rem;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.gray};
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.luloBold};
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  margin-bottom: 1.8rem;

  :hover {
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <h2>ANDREA WILSON</h2>
        <h3>PRODUCTION ARTIST / GRAPHIC DESIGNER</h3>
      </TitleContainer>
      <NavContainer>
        <Link href="/" passHref>
          <NavLink>HOME</NavLink>
        </Link>
        <Link href="/production-art" passHref>
          <NavLink>PRODUCTION ART</NavLink>
        </Link>
        <Link href="/tatcha" passHref>
          <NavLink>TATCHA</NavLink>
        </Link>
        <Link href="/graphic-design" passHref>
          <NavLink>GRAPHIC DESIGN</NavLink>
        </Link>
        <Link href="/fine-art" passHref>
          <NavLink>FINE ART</NavLink>
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
