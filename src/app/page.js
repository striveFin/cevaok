import dynamic from "next/dynamic";
import ProjectsPage from "./components/cards/cards";
import HeroComponent from "./components/hero/hero";
import Head from "next/head";
import GoogleAnalytics from "./components/analytics/googleAnalytics";
import IconAnimation from "./components/icons/animation";
import {
  faPaintRoller,
  faFill,
  faSprayCan,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./components/icons/icons.module.css";
import Link from "next/link";

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
        <meta name="robots" content="index,follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:site_name" content={metadata.og.site_name} />
        <link rel="canonical" href={metadata.canonical} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Google Tag Manager Script */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-1ZFG61N47M" />
      </Head>
      <HeroComponent />
      
      <ProjectsPage />
      <div className="pb-5 text-lg">
        <Link
          href="/pages/contact"
          className="block bg-blue-600 text-white font-bold py-1 px-1 rounded hover:bg-green-600 hover:border-white text-sm text-center  md:text-base md:px-6 md:py-3 md:w-36 md:mx-auto border-2 border-blue-500"
        >
          Contact Us
        </Link>
      </div>
      <div className={styles.container}>
        <IconAnimation
          icon={faPaintRoller}
          label="Interior Painting Projects"
          initialValue={0}
          finalValue={1500}
          duration={4000}
        />
        <IconAnimation
          icon={faFill}
          label="Exterior Painting Projects"
          initialValue={0}
          finalValue={900}
          duration={4000}
        />
        <IconAnimation
          icon={faSprayCan}
          label="Cabinets Refinishing"
          initialValue={0}
          finalValue={260}
          duration={4000}
        />
        <IconAnimation
          icon={faStar}
          label="Happy Costumers"
          initialValue={0}
          finalValue={2500}
          duration={4000}
        />
      </div>
      <TextContainer
        content={textContent}
        bgColor="bg-black"
        showButton={false}
      />
      <TextContainer
        content={textContent1}
        bgColor="bg-gray-600"
        showButton={true}
      />
    </div>
  );
}
