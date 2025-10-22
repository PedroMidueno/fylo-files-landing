import { STRAPI_API_TOKEN, STRAPI_API_URL } from 'astro:env/server'
import { strapi } from "@strapi/client";

const strapiClient = strapi({
  baseURL: STRAPI_API_URL,
  auth: STRAPI_API_TOKEN
})

export { strapiClient }
