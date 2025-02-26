export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // For GitHub Pages deployment
  if (process.env.NODE_ENV === "production") {
    return `/fur/${cleanPath}`;
  }

  // For local development
  return `/${cleanPath}`;
};
