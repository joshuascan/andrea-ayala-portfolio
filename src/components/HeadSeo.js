import Head from "next/head";
import siteMetadata from "../data/siteMetadata";

export default function HeadSeo({ title, description, canonicalUrl, ogType }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
    </Head>
  );
}
