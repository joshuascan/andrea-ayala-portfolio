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

  &:focus {
    outline: none;
  }

  div {
    width: 3.25rem;
    height: 0.35rem;
    background: black;
    border-radius: 10px;
    transition: all 0.4s linear;
    /* position: relative; */
    transform-origin: 1px;

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
