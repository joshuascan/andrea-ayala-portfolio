import HeadSeo from "../components/HeadSeo";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import { Section, SectionTitle, SectionText } from "../styles/GlobalComponents";
import siteMetadata from "../data/siteMetadata";

export default function FineArt() {
  return (
    <>
      <HeadSeo
        title={"FINE ART"}
        description={"A selection of some of my personal artwork"}
        canonicalUrl={`${siteMetadata.siteUrl}/fine-art`}
        ogType={"website"}
      />

      <Layout>
        <Section>
          <SectionTitle>FINE ART</SectionTitle>
          <SectionText>A selection of some of my personal artwork.</SectionText>
          <Carousel />
        </Section>
      </Layout>
    </>
  );
}
