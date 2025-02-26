import { Product } from "../types/product";

export const products: Record<string, Product> = {
  sofa1: {
    id: "1",
    title: "Sofa",
    description: [
      "Product Summary",
      "Modern and comfortable sofa",
      "",
      "Dimensions",
      "Width: 200cm",
      "Height: 85cm",
      "Depth: 95cm",
    ],
    images: ["images/P_sofa.jpg", "images/P_sofa2.jpg"],
    price: 999,
    cols: 2,
    tag: "New",
  },
  sofa2: {
    id: "2",
    title: "Sofa",
    description: [
      "Product Summary",
      "Elegant living room sofa",
      "",
      "Dimensions",
      "Width: 220cm",
      "Height: 90cm",
      "Depth: 100cm",
    ],
    images: ["images/P_sofa2.jpg", "images/P_sofa3.jpg"],
    price: 1299,
    cols: 2,
  },
  chair1: {
    id: "3",
    title: "Accent Chair",
    description: [
      "Product Summary",
      "Stylish accent chair",
      "",
      "Dimensions",
      "Width: 75cm",
      "Height: 85cm",
      "Depth: 80cm",
    ],
    images: ["images/P_armchair.jpg", "images/P_armchair2.jpg"],
    price: 499,
    cols: 1,
    tag: "Sale",
  },
  chair2: {
    id: "4",
    title: "Chair",
    description: [
      "Product Summary",
      "Comfortable desk chair",
      "",
      "Dimensions",
      "Width: 65cm",
      "Height: 110cm",
      "Depth: 70cm",
    ],
    images: ["images/P_armchair3.jpg", "images/P_armchair4.jpg"],
    price: 299,
    cols: 1,
  },
};

// Remove getProductsByCategory since it's not being used
