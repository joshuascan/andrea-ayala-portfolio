import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import Burger from "./Burger";

export const MenuContainer = styled.div`
  display: none;
  margin-top: 1rem;
  z-index: 100;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`;

export const NavWrapper = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  z-index: 10;
`;

export const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavLink = styled.a`
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  margin: 1.8rem;
  color: ${(props) =>
    props.href == props.pathname
      ? props.theme.colors.pink
      : props.theme.colors.gray};

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

export default function NavDropDown() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleNav = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [open]);

  return (
    <>
      <MenuContainer>
        <Burger open={open} toggleNav={toggleNav} />
      </MenuContainer>

      <NavWrapper open={open}>
        <NavContainer>
          <Link href="/" passHref>
            <NavLink pathname={router.asPath}>HOME</NavLink>
          </Link>
          <Link href="/production-art" passHref>
            <NavLink pathname={router.asPath} onClick={closeMenu}>
              PRODUCTION ART
            </NavLink>
          </Link>
          <Link href="/tatcha" passHref>
            <NavLink pathname={router.asPath} onClick={closeMenu}>
              TATCHA
            </NavLink>
          </Link>
          <Link href="/graphic-design" passHref>
            <NavLink pathname={router.asPath} onClick={closeMenu}>
              GRAPHIC DESIGN
            </NavLink>
          </Link>
          <Link href="/fine-art" passHref>
            <NavLink pathname={router.asPath} onClick={closeMenu}>
              FINE ART
            </NavLink>
          </Link>
          <Link href="/images/andrea-wilson-resume.pdf" passHref>
            <NavLink
              onClick={closeMenu}
              target="_blank"
              rel="noreferrer noopener"
            >
              RESUME
            </NavLink>
          </Link>
        </NavContainer>
      </NavWrapper>
    </>
  );
}
