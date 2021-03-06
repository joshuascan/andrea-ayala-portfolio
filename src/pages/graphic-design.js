import HeadSeo from "../components/HeadSeo";
import Image from "next/future/image";
import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Section, SectionTitle, SectionText } from "../styles/GlobalComponents";
import {
  editorialProjects,
  superkids,
  cdRedesign,
  helloDoll,
} from "../constants";
import Modal from "../components/Modal";
import siteMetadata from "../data/siteMetadata";

const EditorialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const EditorialImageContainer = styled.div`
  margin: 0.5rem;
  position: relative;
`;

const ImageContainer = styled.div`
  margin: 3rem 0 7rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 3rem 0 5rem;
  }
`;

const Img = styled(Image)`
  cursor: pointer;
  max-width: 95rem;
  width: 90vw;
  height: auto;

  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 85vw;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 90vw;
  }
`;

export default function GraphicDesign() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});

  const openModal = (imageData) => {
    setData(imageData);
    setIsOpen(true);
  };

  return (
    <>
      <HeadSeo
        title={"GRAPHIC DESIGN"}
        description={"A selection of some of my graphic design work."}
        canonicalUrl={`${siteMetadata.siteUrl}/graphic-design`}
        ogType={"website"}
      />

      <Layout>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
        <Section>
          <SectionTitle>TYPE AS EDITORIAL</SectionTitle>
          <SectionText>
            Editorial design projects which involved exploring different
            typefaces, their histories and classifications through reading and
            research. Each student chose two different typefaces to examine and
            create an editorial style spread. The purpose of the assignment was
            to gain experience using type and elements of design to enhance
            meaning and to develop an appreciation of type as letter forms in
            composition.
          </SectionText>
          <EditorialContainer>
            {editorialProjects.map(({ title, description, image, id }) => (
              <EditorialImageContainer key={id}>
                <Img
                  src={image}
                  alt={title}
                  onClick={() => openModal({ title, description, image, id })}
                />
              </EditorialImageContainer>
            ))}
          </EditorialContainer>
        </Section>
        <Section nopadding>
          <SectionTitle>SUPERKIDS</SectionTitle>
          <SectionText>
            This was a vitamin packaging project in which we had to research two
            different vitamin types, choose a theme, and design wrap around
            bottle labels for them. Using a bright and friendly color palette,
            and fun cartoon characters on the bottles, I wanted my target
            audience to respond with enthusiasm and an eagerness to give this
            product to their kids with trust, and to hopefully make it a little
            easier for their kids to take their vitamins.
          </SectionText>
          <ImageContainer>
            <Img
              src={superkids.image}
              alt={superkids.title}
              onClick={() => openModal(superkids)}
            />
          </ImageContainer>
        </Section>
        <Section nopadding>
          <SectionTitle>CD RE-DESIGN</SectionTitle>
          <SectionText>
            For this project we needed to take an existing Music CD that we felt
            could be improved with a redesign. Based on the style of the
            CD&apos;s musical theme and lyrics, I created a nautical theme
            design for the CD booklet and poster. I chose, The Rising Tide by
            Sunny Day Real Estate. We were required to create a CD booklet,
            inlay tray, spine, a CD disc graphic, and a concert poster.
          </SectionText>
          <ImageContainer>
            <Img
              src={cdRedesign.image}
              alt={cdRedesign.title}
              width={957}
              height={620}
              onClick={() => openModal(cdRedesign)}
            />
          </ImageContainer>
        </Section>
        <Section nopadding>
          <SectionTitle>HELLO DOLL!</SectionTitle>
          <SectionText>
            For my senior project I created the identity and packaging for a
            fictitious company, Hello Doll! which specializes in bath and body
            products. The company&apos;s theme uses a fun and vintage design. I
            created three different patterns to represent the scents the company
            offers. The products I created included lotion, body spray, soap,
            and a sugar scrub.
          </SectionText>
          <ImageContainer>
            <Img
              src={helloDoll.image}
              alt={helloDoll.title}
              width={920}
              height={1174}
              onClick={() => openModal(helloDoll)}
            />
          </ImageContainer>
        </Section>
      </Layout>
    </>
  );
}
