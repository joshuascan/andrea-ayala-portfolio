import styled from "styled-components";

export const Section = styled.section`
  padding: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.luloBold};
  font-size: 1.8rem;
  letter-spacing: 0;
  margin-bottom: 2.5rem;
`;

export const SectionText = styled.p`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  letter-spacing: 0.1rem;
  line-height: 1.8;
  color: #605e5e;
  text-align: center;
  width: 68rem;
`;

export const CopyrightText = styled.p`
  font-family: ${({ theme }) => theme.fonts.futuraLight};
  font-size: 1rem;
  letter-spacing: 0;
  color: #939598;
  margin-top: 0.5rem;
`;
