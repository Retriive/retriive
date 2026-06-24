// Central SEO configuration and helpers.
// If the production domain changes, update SITE.url — everything else derives from it.
export const SITE = {
  url: "https://retriive.com",
  name: "Retriive Inc.",
  shortName: "Retriive",
  title: "Retriive Inc. — Intelligent AI solutions for modern enterprises",
  description:
    "Retriive Inc. builds retrieval-grounded AI platforms that turn handbooks, SOPs, and internal records into instant, cited answers for universities, government, and enterprises.",
  ogImage: "/og-image.png",
  twitter: "@retriive",
  locale: "en_US",
  themeColor: "#7c3aed",
} as const;

type MetaTag =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

type LinkTag = { rel: string; href: string };

type SeoArgs = {
  title: string;
  description: string;
  /** Route path beginning with "/", e.g. "/about". Defaults to home. */
  path?: string;
  /** Absolute URL or root-relative path to a social share image. */
  image?: string;
  type?: "website" | "article" | "profile";
};

function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  if (pathOrUrl === "/") return SITE.url;
  return `${SITE.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

/**
 * Builds a consistent set of meta + link tags for a route's `head()`.
 * Per-page tags override the site-wide defaults set in __root.tsx because
 * TanStack Router dedupes by `title` / `name` / `property`.
 */
export function seo({
  title,
  description,
  path = "/",
  image = SITE.ogImage,
  type = "website",
}: SeoArgs): { meta: MetaTag[]; links: LinkTag[] } {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:locale", content: SITE.locale },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/** Organization structured data (JSON-LD) for rich results. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: absoluteUrl("/og-image.png"),
    description: SITE.description,
    email: "team@retriive.com",
    sameAs: [],
  };
}

/** WebSite structured data (JSON-LD). */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  };
}
