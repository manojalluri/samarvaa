import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: string; // JSON string representation of schema
  url?: string;
  image?: string;
}

export default function SEO({ title, description, canonical, schema, url, image }: SEOProps) {
  // Replace with the actual production domain
  const siteUrl = 'https://samarvaevents.com'; 
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  // Use a default OpenGraph image if none provided
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/src/assets/image.png`; 

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* JSON-LD Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
}
