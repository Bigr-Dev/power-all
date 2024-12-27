const sitemap = async () => {
  // Base URL
  const baseUrl = "https://power-all-rendanis-projects-7b9f566c.vercel.app/";

  // Fetch dynamic routes
  const origin = process.env.API_ASIDE;
  const servicesRes = await fetch(`${origin}all`);
  const { services } = await servicesRes.json();

  const brandsRes = await fetch(`${origin}brands`);
  const { brands } = await brandsRes.json();

  const categoriesRes = await fetch(`${origin}categories`);
  const { categories } = await categoriesRes.json();

  // Static routes
  const routes = ["", "/products/all"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // Dynamic routes for services
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/products/${service.id}`,
    lastModified: new Date().toISOString(),
  }));

  // Dynamic routes for brands and categories
  const productRoutes = services.flatMap((service) => [
    ...brands.map((brand) => ({
      url: `${baseUrl}/products/${service.id}/brand/${brand.id}`,
      lastModified: new Date().toISOString(),
    })),
    ...categories.map((category) => ({
      url: `${baseUrl}/products/${service.id}/category/${category.id}`,
      lastModified: new Date().toISOString(),
    })),
    ...brands.flatMap((brand) =>
      categories.map((category) => ({
        url: `${baseUrl}/products/${service.id}/brand/${brand.id}/category/${category.id}`,
        lastModified: new Date().toISOString(),
      }))
    ),
  ]);

  return [...routes, ...serviceRoutes, ...productRoutes];
};

export default sitemap;
