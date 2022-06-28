import styled from "styled-components";
import Image from "next/image";
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
  border: 1px solid red;
  width: 125rem;
`;

const ImageContainer = styled.div`
  width: 43rem;
  height: 22rem;
  position: relative;
  border: 1px solid red;
`;

const Img = styled(Image)`
  object-fit: contain;
  overflow: hidden;
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
                <Img
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="contain"
                />
              </ImageContainer>
            );
          })}
        </ArtContainer>
      </Section>
    </Layout>
  );
}
