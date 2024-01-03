import dynamic from "next/dynamic";
import ProjectsPage from "./components/cards/cards";
import HeroComponent from "./components/hero/hero";
import Head from "next/head";
// import TextContainer from "./components/texts/slider"

export const metadata = {
  title: "Professional Painting Services in London - J.S Painting & Decorating",
  description:
    "Transform your space with precision and elegance. Top-notch painting and decorating services in London for homes and businesses. Contact us for a flawless finish that exceeds expectations.",
  og: {
    type: "website",
    url: "https://www.paintersinlondon.ltd",
    image: "https://www.paintersinlondon.ltd/images/painters.jpg",
    site_name: "J.S Painting & Decorating London",
  },
  canonical: "https://www.paintersinlondon.ltd",
  author: "J.S Painting & Decorating",
  keywords:
    "painting services, decorating services, London painters, home improvement, house painting, best prices london, painting london",
};

const TextContainer = dynamic(() => import("./components/texts/slider"), {
  ssr: false,
});

export default function Home() {
  const textContent = [
    "Professional Painting Services in London",
    "Transforming Spaces with Precision and Elegance",
    "At J.S Painting, we take pride in delivering top-notch painting services in the heart of London. Our skilled team of painters is dedicated to transforming your space with precision and elegance.",
    "Whether you're looking to refresh the interiors of your home or enhance the curb appeal of your business, we bring creativity, attention to detail, and a passion for perfection to every project. From meticulous preparation to the final strokes, we ensure a flawless finish that exceeds expectations.",
  ];

  const textContent1 = [
    "Not Your Average Painting Service",
    "Elevate Your Space with J.S Painting & Decorating",
    "Welcome to J.S Painting & Decorating, where we redefine the ordinary and transform your space into a work of art. Based in the vibrant heart of London, our team takes immense pride in delivering exceptional painting and decorating services that go beyond expectations.",
    "Dreaming of a home or business space that reflects your style and personality? Look no further. Our skilled team of painters and decorators is dedicated to enhancing your environment with precision and elegance. Whether it's revitalizing the interiors of your home or giving your business a fresh, inviting appeal, we bring a unique blend of creativity, meticulous attention to detail, and an unwavering passion for perfection to every project.",
  ];

  return (
    <div>
      <Head>
        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:site_name" content={metadata.og.site_name} />
        <link rel="canonical" href={metadata.canonical} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Google Tag Manager Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1ZFG61N47M"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1ZFG61N47M');
            `,
          }}
        />
      </Head>
      <HeroComponent />

      <ProjectsPage />
      <TextContainer
        content={textContent}
        bgColor="bg-gray-800"
        showButton={false}
      />
      <TextContainer
        content={textContent1}
        bgColor="bg-gray-800"
        showButton={true}
      />
    </div>
  );
}
