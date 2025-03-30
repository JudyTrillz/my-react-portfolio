import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.VITE_APP_PROJECT_ID;

const client = createClient({
  projectId: projectId,
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-03-15",
});

export const urlFor = (source) => imageUrlBuilder(client).image(source);

export default client;
