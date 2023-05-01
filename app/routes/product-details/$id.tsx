import ProductDetails from "~/components/Organisms/ProductDetails/ProductDetails";

const productDetails = {
  mkName: "Apple",
  productName: "iPhone 13 128 GB",
  badge: "En Populer Cep Telefonu",
  rating: 4.3,
  imageUrl: "https://cdn.akakce.com/z/apple/iphone-13.jpg",
  storageOptions: ["128 GB", "256 GB", "512 GB"],
  countOfPrices: 132,
  price: 20567,
  freeShipping: true,
  lastUpdate: "Simdi",
};

export default function ProductDetailsPage() {
  return <ProductDetails productDetails={productDetails} />;
}
