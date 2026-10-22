import { getCollection } from "astro:content";

export async function getPageSections(locale: string) {
  const entries = await getCollection("pages");

  return entries
    .filter((entry) => entry.id.startsWith(`${locale}/`))
    .sort((a, b) => a.data.order - b.data.order);
}
