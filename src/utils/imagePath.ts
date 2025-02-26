export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Get the base URL from the environment or use a default
  const baseUrl = process.env.PUBLIC_URL || "";

  // Combine the base URL with the image path
  return `${baseUrl}/${cleanPath}`;
};
