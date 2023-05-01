import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";
import HorizontalProduct from "../../Molecules/HorizontalProduct/HorizontalProduct";

const horizontalProducts = [
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
    countOfPrices: 133,
    followCount: 521,
  },
  {
    code: 126,
    imageUrl: "https://cdn.akakce.com/x/samsung/samsung-galaxy-m52.jpg",
    name: "Samsung Galaxy M52 128 GB",
    dropRatio: 8.8,
    price: 6399,
    countOfPrices: 70,
    followCount: 1210,
  },
];

const HorizontalProductList = () => {
  return (
    <Box mt="lg">
      <Carousel
        maw="25vw"
        mx="auto"
        withIndicators
        height={210}
        withControls={false}
        styles={{
          indicator: {
            background: "#228be6",
            width: 12,
            height: 4,
            transition: "width 250ms ease",
            "&[data-active]": {
              width: 40,
            },
          },
        }}
      >
        {horizontalProducts.map((product) => (
          <Carousel.Slide key={product.code}>
            <HorizontalProduct product={product} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

export default HorizontalProductList;
