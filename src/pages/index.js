import HeadSeo from "../components/HeadSeo";
import Link from "next/link";
import styled from "styled-components";
import Header from "../components/Header";
import siteMetadata from "../data/siteMetadata";

const HeaderWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
    width: 90vw;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 95vw;
  }
`;

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12rem 0;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 1073px;

  @media ${({ theme }) => theme.breakpoints.xl} {
    margin: 8rem 0;
    height: 950px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 90vw;
    height: 80vh;
    align-items: center;
    margin: 4rem 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 90vw;
    height: 100vw;
    margin: 6rem 0;
  }
`;

const PinkRectangle = styled.div`
  height: 100%;
  width: 1181px;
  background-color: ${({ theme }) => theme.colors.pink};
  position: absolute;
  right: 660px;
  z-index: -1;

  @media screen and (max-width: 1462px) {
    right: 573px;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    right: 457px;
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    right: 342px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    right: 0;
  }
`;

const HeroText = styled.h1`
  font-size: 9.6rem;
  font-family: ${({ theme }) => theme.fonts.luloBold};
  color: ${({ theme }) => theme.colors.pink};
  text-align: center;
  line-height: 1.5;

  @media screen and (max-width: 1462px) {
    font-size: 8.3rem;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    font-size: 6.8rem;
    letter-spacing: 0;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 5.1rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 6.8rem;
    color: white;
    text-align: left;
    margin-left: 1.5rem;
    max-width: 65rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 3.8rem;
    margin: 0 auto;
    max-width: 33rem;
    padding-left: 1rem;
  }
`;

const WhiteText = styled.span`
  color: white;
`;

const HeaderTop = styled.div`
  margin-top: 12rem;
  margin-bottom: -7.5rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 0;
  }
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1113px;
  padding-right: 2.2rem;

  @media screen and (max-width: 1462px) {
    width: 967px;
    padding-right: 2rem;
    margin-top: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 773px;
    padding-right: 1.5rem;
    margin-top: 2.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 579px;
    padding-right: 1rem;
    margin-top: 4rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;

const SubHeader = styled.h2`
  font-family: ${({ theme }) => theme.fonts.futuraBook};
  font-size: 1.7rem;
  letter-spacing: 0.15rem;
  color: white;

  @media ${({ theme }) => theme.breakpoints.xl} {
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 1.2rem;
  }
`;

const LinkContainer = styled.nav`
  display: flex;
  flex-direction: column;
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

  @media ${({ theme }) => theme.breakpoints.xl} {
    font-size: 1.1rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    letter-spacing: 0;
  }
`;

export default function Home() {
  return (
    <div>
      <HeadSeo
        title={"HOME"}
        description={
          "Andrea Ayala is a production artist and graphic designer."
        }
        canonicalUrl={siteMetadata.siteUrl}
        ogType={"website"}
      />

      <HomeContainer>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <HomeContent>
          <PinkRectangle />
          <HeaderTop>
            <HeroText>
              <WhiteText>HELLO, MY</WhiteText> NAME IS
              <br />
              <WhiteText>ANDREA</WhiteText> AYALA
            </HeroText>
          </HeaderTop>
          <HeaderBottom>
            <SubHeader>PRODUCTION ARTIST / GRAPHIC DESIGNER</SubHeader>
            <LinkContainer>
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
              <Link href="/images/andrea-ayala-resume-2023.pdf" passHref>
                <NavLink target="_blank" rel="noreferrer noopener">
                  RESUME
                </NavLink>
              </Link>
            </LinkContainer>
          </HeaderBottom>
        </HomeContent>
      </HomeContainer>
    </div>
  );
}
