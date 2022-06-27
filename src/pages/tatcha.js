import Layout from "../components/Layout";
import {
  Section,
  SectionTitle,
  SectionText,
  CopyrightText,
} from "../styles/GlobalComponents";

export default function Tatcha() {
  return (
    <Layout>
      <Section>
        <SectionTitle>TATCHA</SectionTitle>
        <SectionText>
          In my current role at Tatcha as a Packaging Production Designer, I
          focus mainly on artwork layout and typography, laying out artwork on a
          variety of skin care and beauty packaging. Here is just a sample of
          products I&apos;ve helped to produce.
        </SectionText>
        <CopyrightText>All artwork © TATCHA, 2021</CopyrightText>
      </Section>
    </Layout>
  );
}
