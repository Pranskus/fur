export const getImagePath = (path) => {
  // Check if we're in development or production
  const isDevelopment = process.env.NODE_ENV === "development";
  return isDevelopment ? path : `/fur${path}`;
};
