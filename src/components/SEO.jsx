import { Helmet } from "react-helmet";

/**
 * SEO component for managing meta tags and structured data (schema.org)
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} [props.keywords] - Meta keywords
 * @param {string} [props.url] - Canonical URL
 * @param {string} [props.image] - Social sharing image URL
 * @param {string} [props.type] - Open Graph type (default: website)
 * @param {Object} [props.schema] - JSON-LD schema.org object
 */
const SEO = ({
  title,
  description,
  keywords = "PDF, PDF merger, merge PDF, combine PDF, online PDF tool, free PDF, secure PDF, PDF Hero",
  url = "https://pdfhero.app/",
  image = "/img/logo.svg",
  type = "website",
  schema,
}) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content="PDF Hero Team" />
      <meta name="theme-color" content="#1a73e8" />
      <link rel="canonical" href={url} />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@pdfheroapp" />
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  </>
);

export default SEO;
