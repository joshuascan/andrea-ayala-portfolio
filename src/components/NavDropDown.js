import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Burger from "./Burger";

export const MenuContainer = styled.div`
  display: none;
  z-index: 1;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`;

export const NavWrapper = styled.div`
  border: 1px solid orange;
  display: ${(props) => (props.open ? "flex" : "none")};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: all 0.4s ease-in-out;
`;

export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavLink = styled.a`
  font-size: 2.8rem;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin: 2rem;
  letter-spacing: 0.4rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`;

export default function NavDropDown() {
  const [open, setOpen] = useState(false);

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
        <LinkContainer>
          <Link href="#about" passHref>
            <NavLink onClick={closeMenu}>About</NavLink>
          </Link>
          <Link href="#projects" passHref>
            <NavLink onClick={closeMenu}>Projects</NavLink>
          </Link>
          <Link href="#contact" passHref>
            <NavLink onClick={closeMenu}>Contact</NavLink>
          </Link>
          <Link href="/images/josh_scanlan_resume.pdf" passHref>
            <NavLink
              onClick={closeMenu}
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume
            </NavLink>
          </Link>
        </LinkContainer>
      </NavWrapper>
    </>
  );
}
