import Head from "next/head";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    url?: string;
    image?: string;
    type?: string;
}

const SEOMetadata = ({
    title = "Ramad Consultants Ltd.",
    description = "Ramad Engineering Consultants, best practitioners of architectural and engineering excellence.",
    keywords = "Engineering, Consultants, Nigeria, Ramad, Architecture, Structural, Civil, Mechanical, Electrical, Plumbing, Design, Construction, Project Management, Projects Management, Building, Infrastructure, Sustainable, Innovative, Solutions",
    url = "https://ramadconsulting.com",
    image = "https://ramadconsulting.com/assets/images/logo.png",
    type = "website",
}: SEOProps) => {
    return (
        <Head>
            {/* Basic Meta */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta content={keywords} name="keywords" />

            {/* Open Graph / Facebook */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content={new URL(url).hostname} />
            <meta property="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
};

export default SEOMetadata;
