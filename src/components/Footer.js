import Link from "next/link";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: black;
  padding-top: 2rem;
`;

const FooterText = styled.p`
  color: white;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.futuraLight};
  font-weight: 400;
  font-size: 1.4rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: underline;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        <Link href="https://www.linkedin.com/in/andrea-wilson7/" passHref>
          <FooterLink target="_blank" rel="noreferrer noopener">
            LinkedIn
          </FooterLink>
        </Link>{" "}
        /{" "}
        <Link href="mailto: aandrea714@gmail.com" passHref>
          <FooterLink target="_blank" rel="noreferrer noopener">
            aandrea714@gmail.com
          </FooterLink>
        </Link>{" "}
        /{" "}
        <Link href="tel:9254959221" passHref>
          <FooterLink>925.495.9221</FooterLink>
        </Link>
      </FooterText>
    </FooterContainer>
  );
}
