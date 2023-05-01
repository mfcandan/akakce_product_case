import { Carousel } from "@mantine/carousel";
import { Box, LoadingOverlay } from "@mantine/core";
import HorizontalProduct from "../../Molecules/HorizontalProduct/HorizontalProduct";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

interface HorizontalProductListProps {
  products: any[];
}

const HorizontalProductList = ({ products }: HorizontalProductListProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  return (
    <Box mt="lg">
      
      <Carousel
        maw={isMobile ? "100vw" : "25vw"}
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
        {products.map((product) => (
          <Carousel.Slide key={product.code}>
            <HorizontalProduct product={product} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

export default HorizontalProductList;
