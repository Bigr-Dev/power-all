const robots = () => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap:
      "https://power-all-rendanis-projects-7b9f566c.vercel.app/sitemap.xml",
  };
};

export default robots;
