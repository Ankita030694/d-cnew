import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const navbarLogoSrc =
    "https://www.figma.com/api/mcp/asset/c856f3af-a4f0-4206-93d6-fd9b1b2e7e99";

  return {
    name: "Designncode",
    short_name: "Designncode",
    description:
      "Designncode blends strategy, UI/UX, and modern development to build high-converting digital experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#efebe5",
    theme_color: "#111111",
    icons: [
      {
        src: navbarLogoSrc,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: navbarLogoSrc,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
