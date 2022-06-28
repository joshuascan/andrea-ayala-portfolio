import styled from "styled-components";
import Image from "next/future/image";
import Layout from "../components/Layout";
import {
  Section,
  SectionTitle,
  SectionText,
  CopyrightText,
} from "../styles/GlobalComponents";
import { productionArt } from "../constants";

const ArtContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 125rem;
  margin: 5rem 0;
`;

const ImageContainer = styled.div`
  padding: 2rem;
  display: flex;
`;

const Img = styled(Image)`
  height: 22rem;
  width: auto;
`;

export default function ProductionArt() {
  return (
    <Layout>
      <Section>
        <SectionTitle>PRODUCTION ART</SectionTitle>
        <SectionText>
          I worked at All American Label & Packaging from 2016-2021 as a
          Pre-Press Production Artist. I preflighted, proofed, and prepared
          print ready art files, specializing in labels for wine, food,
          cosmetics and cannabis products. Here is just a sample of a few labels
          I&apos;ve worked to produce.
        </SectionText>
        <CopyrightText>
          All artwork © All American Label & Packaging
        </CopyrightText>
        <ArtContainer>
          {productionArt.map(({ title, description, image, id }) => {
            return (
              <ImageContainer key={id}>
                <Img src={image} alt={title} layout="fill" sizes="22rem" />
              </ImageContainer>
            );
          })}
        </ArtContainer>
      </Section>
    </Layout>
  );
}
