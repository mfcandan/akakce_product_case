import { Grid } from "@mantine/core";
import VerticalProductCard from "../../Molecules/VerticalProduct/VerticalProduct";

const products = [
  {
    code: 123,
    imageUrl: "https://cdn.akakce.com/x/apple/iphone-13.jpg",
    name: "iPhone 13 128 GB",
    dropRatio: 8.3,
    price: 20137,
    countOfPrices: 121,
    followCount: 3123,
  },
  {
    code: 124,
    imageUrl:
      "https://cdn.akakce.com/x/apple/iphone-11-64-gb-aksesuarsiz-kutu.jpg",
    name: "iPhone 11 64 GB Aksesuarsız Kutu",
    dropRatio: 3.1,
    price: 13284.99,
    countOfPrices: 240,
    followCount: 4394,
  },
  {
    code: 125,
    imageUrl: "https://cdn.akakce.com/x/apple/iphone-13-pro-max.jpg",
    name: "iPhone 13 Pro Max 128 GB",
    dropRatio: 3.3,
    price: 30999,
    followCount: 521,
  },
  {
    code: 126,
    imageUrl: "https://cdn.akakce.com/x/samsung/samsung-galaxy-m52.jpg",
    name: "Samsung Galaxy M52 128 GB",
    dropRatio: 8.8,
    price: 6399,
    countOfPrices: 70,
  },
  {
    code: 127,
    imageUrl: "https://cdn.akakce.com/x/apple/iphone-13.jpg",
    name: "iPhone XS 128 GB",
    dropRatio: 1.8,
    price: 16399,
    countOfPrices: 82,
  },
  {
    code: 128,
    imageUrl: "https://cdn.akakce.com/x/apple/iphone-13-pro-max.jpg",
    name: "iPhone SE 128 GB",
    dropRatio: 12.1,
    price: 14399,
    countOfPrices: 70,
  },
];

const VerticalProductList = () => {
  return (
    <Grid mt="lg" mx="35%" bg="gray.1" px="xs" py="md">
      {products.map((product, index: number) => (
        <Grid.Col key={index} span={6}>
          <VerticalProductCard product={product} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default VerticalProductList;
