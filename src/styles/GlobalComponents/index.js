import styled from "styled-components";

export const Section = styled.section`
  padding: 7rem;
  padding: ${({ nopadding }) => (nopadding ? "0" : "7rem")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.xl} {
    padding: ${({ nopadding }) => (nopadding ? "0" : "5.5rem 0rem")};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: ${({ nopadding }) => (nopadding ? "0" : "4rem 0rem")};
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.luloBold};
  font-size: 1.8rem;
  letter-spacing: 0;
  margin-bottom: 2.5rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

export const SectionText = styled.p`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  letter-spacing: 0.1rem;
  line-height: 1.8;
  font-size: 1.5rem;
  color: #605e5e;
  text-align: center;
  max-width: 68rem;
  width: 90%;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.2rem;
  }
`;

export const CopyrightText = styled.p`
  font-family: ${({ theme }) => theme.fonts.futuraLight};
  font-size: 1rem;
  letter-spacing: 0;
  color: #939598;
  margin-top: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 0.8rem;
  }
`;
