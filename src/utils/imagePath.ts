export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Check if we're on GitHub Pages by looking at the hostname
  const isGitHubPages =
    typeof window !== "undefined" &&
    window.location.hostname === "pranskus.github.io";

  // For GitHub Pages deployment
  if (isGitHubPages) {
    return `/fur/${cleanPath}`;
  }

  // For local development
  return `/${cleanPath}`;
};
