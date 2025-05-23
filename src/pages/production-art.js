import HeadSeo from "../components/HeadSeo";
import Image from "next/future/image";
import { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import {
  Section,
  SectionTitle,
  SectionText,
  CopyrightText,
} from "../styles/GlobalComponents";
import { productionArt } from "../constants";
import Modal from "../components/Modal";
import siteMetadata from "../data/siteMetadata";

const ArtContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  margin: 5rem 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 3rem 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-bottom: 0;
  }
`;

const ImageContainer = styled.div`
  padding: 2rem;
  display: flex;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0.75rem;
  }
`;

const Img = styled(Image)`
  cursor: pointer;
  height: 22rem;
  width: auto;

  @media ${({ theme }) => theme.breakpoints.lg} {
    height: 14rem;
  }
`;

export default function ProductionArt() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [startingSlide, setStartingSlide] = useState();

  const openModal = (dataArray, index) => {
    setData(dataArray);
    setStartingSlide(index);
    setIsOpen(true);
  };

  return (
    <>
      <HeadSeo
        title={"PRODUCTION ART"}
        description={
          "As a Production Artist, I have preflighted, proofed, and prepared print ready art files, specializing in labels for wine, food, cosmetics and cannabis products."
        }
        canonicalUrl={`${siteMetadata.siteUrl}/production-art`}
        ogType={"website"}
      />

      <Layout>
        <Modal
          isCarousel={true}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={data}
          startingSlide={startingSlide}
        />
        <Section>
          <SectionTitle>PRODUCTION ART</SectionTitle>
          <SectionText>
            I worked at All American Label & Packaging from 2016-2021 as a
            Pre-Press Production Artist. I preflighted, proofed, and prepared
            print ready art files, specializing in labels for wine, food,
            cosmetics and cannabis products. Here is just a sample of a few
            labels I&apos;ve worked to produce.
          </SectionText>
          <CopyrightText>
            All artwork © All American Label & Packaging
          </CopyrightText>
          <ArtContainer>
            {productionArt.map(({ title, description, image, id }) => (
              <ImageContainer key={id}>
                <Img
                  src={image}
                  alt={title}
                  sizes="25vw"
                  priority
                  onClick={() => openModal(productionArt, id)}
                />
              </ImageContainer>
            ))}
          </ArtContainer>
        </Section>
      </Layout>
    </>
  );
}
