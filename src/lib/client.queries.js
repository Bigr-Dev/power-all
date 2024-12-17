import pool from "./db.js";

// Get services
export const GET_SERVICES = async () => {
  const query = "SELECT * FROM services;";
  try {
    return await pool.query(query);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// Get categories
export const GET_CATEGORIES = async () => {
  const query = `
  SELECT DISTINCT 
    c.id AS category_id, 
    c.category 
  FROM categories c
  JOIN services_categories sc ON c.id = sc.category_id
  JOIN services s ON sc.service_id = s.id;
  `;
  try {
    return await pool.query(query);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// Get categories by service_id
export const GET_CATEGORIES_BY_SERVICE_ID = async (service_id) => {
  const query = `
  SELECT DISTINCT 
    c.id AS category_id, 
    c.category 
  FROM categories c
  JOIN services_categories sc ON c.id = sc.category_id
  JOIN services s ON sc.service_id = s.id
  WHERE s.id = ?; 
`;
  try {
    return await pool.query(query, [service_id]);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// Get brands
export const GET_BRANDS = async () => {
  const query = `
  SELECT DISTINCT 
    b.id AS brand_id, 
    b.brand_name, 
    b.description 
  FROM brands b
  JOIN brands_services_categories bsc ON b.id = bsc.brand_id
  JOIN services s ON bsc.service_id = s.id;
`;
  try {
    return await pool.query(query);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// Get brands by service
export const GET_BRANDS_BY_SERVICE_ID = async (service_id) => {
  const query = `
  SELECT DISTINCT 
    b.id AS brand_id, 
    b.brand_name, 
    b.description 
  FROM brands b
  JOIN brands_services_categories bsc ON b.id = bsc.brand_id
  JOIN services s ON bsc.service_id = s.id
  WHERE s.id = ?;
`;
  try {
    return await pool.query(query, [service_id]);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// Get products
export const GET_PRODUCTS = async () => {
  const query = `
  SELECT 
    p.name, 
    p.description, 
    p.feature,
    b.brand_name, 
    s.service_name, 
    c.category
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id;
  `;

  try {
    return await pool.query(query);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// get products by service
export const GET_PRODUCTS_BY_SERVICE = async (service_id) => {
  const query = `
  SELECT 
    p.name, 
    p.description, 
    p.feature,
    b.brand_name, 
    s.service_name, 
    c.category
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE s.id = ?; 
`;
  try {
    return await pool.query(query, [service_id]);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// Get products by service id
export const GET_PRODUCTS_BY_SERVICE_ID = async (service_id) => {
  const query = `
  SELECT 
    p.name, 
    p.description, 
    p.feature,
    b.brand_name, 
    s.service_name, 
    c.category
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE s.id = ?;
`;

  try {
    return await pool.query(query, [service_id]);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// Get products in a specific category
export const GET_PRODUCT_BY_CATEGORY = async (category) => {
  const query = `
  SELECT 
    p.name,
    p.description, 
    p.feature, 
    b.brand_name, 
    s.service_name, 
    c.category
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE c.category = ?;
  `;

  try {
    return await pool.query(query, [category]);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// Get products by name
export const GET_PRODUCT_BY_NAME = async (name) => {
  const query = `
  SELECT 
    p.name, 
    p.description, 
    p.feature, 
    b.brand_name, 
    s.service_name, 
    c.category
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE p.name LIKE ?;
`;
  try {
    return await pool.query(query, [name]);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// Get products by id
export const GET_PRODUCT_BY_ID = async (id) => {
  const query = `
  SELECT 
    p.name, 
    p.description, 
    p.feature, 
    b.brand_name, 
    s.service_name, 
    c.category
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE p.id = ?;
  `;
  try {
    return await pool.query(query, [id]);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// Get products by brand
export const GET_PRODUCT_BY_BRAND = async (brand) => {
  const query = `
  SELECT 
    p.name, 
    p.description, 
    p.feature,
    b.brand_name, 
    s.service_name, 
    c.category
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE b.id = ?;
  `;

  try {
    return await pool.query(query, [brand]);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// Get products by category id
export const GET_PRODUCTS_BY_CATEGORY_ID = async (category_id) => {
  const query = `
  SELECT 
    p.name, 
    p.description, 
    p.feature, 
    b.brand_name, 
    s.service_name
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE c.id = ?
  ORDER BY p.name;
  `;
  try {
    return await pool.query(query, [category_id]);
  } catch (error) {
    console.error("Error in GET_PRODUCT_BY_CATEGORY_ID:", error);
    throw error;
  }
};

// Get products by service and category
export const GET_PRODUCTS_BY_SERVICE_CATEGORY = async (
  service_id,
  category_id
) => {
  const query = `
  SELECT 
    p.name, 
    p.description, 
    p.feature, 
    b.brand_name, 
    s.service_name
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE s.id = ? 
  AND c.id = ?
  ORDER BY p.name;
  `;

  try {
    return await pool.query(query, [service_id, category_id]);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// Get products filtered by brand ID and category ID
export const GET_PRODUCTS_BY_BRAND_AND_CATEGORY = async (
  brand_id,
  category_id
) => {
  const query = `
    SELECT 
    p.name, 
    p.description, 
    p.feature, 
    b.brand_name, 
    s.service_name
  FROM products p
  JOIN brands b ON p.brand_id = b.id
  JOIN services s ON p.service_id = s.id
  JOIN categories c ON p.category_id = c.id
  WHERE b.id = ? 
  AND c.id = ?
  ORDER BY p.name;
  `;

  try {
    return await pool.query(query, [brand_id, category_id]);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
