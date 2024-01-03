const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname: "https://paintersinlondon.ltd" });

  // Adding website routes
  const routes = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/pages/about", changefreq: "monthly", priority: 0.8 },
    { url: "/pages/contact", changefreq: "monthly", priority: 0.8 },
    // Add more routes as needed
  ];

  routes.forEach((route) => {
    sitemapStream.write(route);
  });

  sitemapStream.end();

  try {
    const data = await streamToPromise(sitemapStream).then((data) => data.toString());

    fs.writeFileSync("./sitemap.xml", data);
    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

generateSitemap();
