import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Image,
  Rating,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";
import HomeLink from "~/components/Atoms/HomeLink";
import PriceFormatter from "~/components/Atoms/PriceFormatter";

interface ProductDetailsProps {
  productDetails: {
    mkName: string;
    productName: string;
    badge: string;
    rating: number;
    imageUrl: string;
    storageOptions: string[];
    countOfPrices: number;
    price: number;
    freeShipping: boolean;
    lastUpdate: string;
  };
}

const ProductDetails = ({ productDetails }: ProductDetailsProps) => {
  const [selectedStorage, setSelectedStorage] = useState(
    productDetails.storageOptions[0]
  );

  return (
    <Flex direction="column" align="center" justify="center" mt="lg">
      <HomeLink />
      <Card>
        <Flex direction="column" align="center">
          <Flex miw="30vw" justify={"space-between"} gap="3em">
            <Flex direction="column">
              <Title color="blue" order={5}>
                {productDetails.mkName}
              </Title>
              <Text size="lg">{productDetails.productName}</Text>
              <Badge radius="xs" color="yellow" variant="light" mt="md">
                <Text color="black" weight={800}>
                  {productDetails.badge}
                </Text>
              </Badge>
            </Flex>
            <Rating value={productDetails.rating} readOnly />
          </Flex>
          <Box>
            <Image
              src={productDetails.imageUrl}
              alt={productDetails.productName}
              width={"150px"}
              mt="xl"
            />
          </Box>

          <Flex
            direction="column"
            align="center"
            style={{ width: "100%" }}
            mt="lg"
            bg="gray.1"
            p="md"
          >
            <Text size="sm">Kapasite Seçenekleri:</Text>
            <Flex gap="md" mt="xs">
              {productDetails.storageOptions.map((storageOption) => (
                <Button
                  variant="outline"
                  size="lg"
                  color={selectedStorage === storageOption ? "blue" : "dark"}
                  key={storageOption}
                  onClick={() => setSelectedStorage(storageOption)}
                >
                  {storageOption}
                </Button>
              ))}
            </Flex>
            <Flex direction="column" align="center" gap="xs" mt="lg">
              <Text size="sm" weight="800">
                {productDetails.countOfPrices +
                  " satıcı içinde kargo dahil en ucuz fiyat seçeneği"}
              </Text>
              <PriceFormatter price={productDetails.price} />
              {productDetails.freeShipping && (
                <Text color="green" size="sm" weight="700">
                  Ücretsiz kargo
                </Text>
              )}
              <Text color="gray">
                Son güncelleme: {productDetails.lastUpdate}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default ProductDetails;
