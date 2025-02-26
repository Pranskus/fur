export const getImagePath = (path) => {
  const baseUrl = process.env.NODE_ENV === "development" ? "/fur" : "";
  return `${baseUrl}${path}`;
};
