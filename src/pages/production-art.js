import Layout from "../components/Layout";
import {
  Section,
  SectionTitle,
  SectionText,
  CopyrightText,
} from "../styles/GlobalComponents";

export default function ProductionArt() {
  return (
    <Layout>
      <Section>
        <SectionTitle>PRODUCTION ART</SectionTitle>
        <SectionText>
          I worked at All American Label & Packaging from 2016-2021 as a
          Pre-Press Production Artist. I preflight, proofed, and prepared print
          ready art files, specializing in labels for wine, food, cosmetics and
          cannabis products. Here is just a sample of a few labels I&apos;ve
          worked to produce.
        </SectionText>
        <CopyrightText>
          All artwork © All American Label & Packaging
        </CopyrightText>
      </Section>
    </Layout>
  );
}
