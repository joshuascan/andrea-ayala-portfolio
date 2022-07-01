import styled from "styled-components";

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 3.25rem;
  background: transparent;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 2.5rem;
  }

  div {
    width: 3.25rem;
    height: 0.35rem;
    background: ${(props) => (props.open ? "white" : "black")};
    transition: transform 0.4s linear;
    transform-origin: 1px;

    @media ${({ theme }) => theme.breakpoints.sm} {
      width: 2.5rem;
      height: 0.25rem;
    }

    :first-child {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${(props) => (props.open ? "0" : "1")};
      transform: ${(props) =>
        props.open ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default function Burger({ toggleNav, open }) {
  return (
    <StyledBurger onClick={toggleNav} open={open}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
