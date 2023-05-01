import { Card, Flex, Image, Text, Title } from "@mantine/core";
import { Link } from "@remix-run/react";
import DropRatioBadge from "~/components/Atoms/DropRatioBadge";

export interface HorizontalProductCardProps {
  product: {
    code: number;
    imageUrl: string;
    name: string;
    dropRatio: number;
    price: number;
    countOfPrices?: number;
    followCount?: number;
  };
}

const HorizontalProductCard = ({ product }: HorizontalProductCardProps) => {
  const formattedPrice = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
  }).format(product.price);

  const formattedFollowerNumber =
    product?.followCount && product?.followCount > 1000
      ? new Intl.NumberFormat("en-US", {
          style: "decimal",
          minimumFractionDigits: 0,
        }).format(product?.followCount / 1000)
      : product?.followCount;

  return (
    <Link
      to={`/product-details/${product.code}`}
      style={{ textDecoration: "none" }}
    >
      <Card>
        <Flex miw="25vw" justify="start">
          <Flex pos="relative">
            {product.dropRatio && (
              <DropRatioBadge dropRatio={product.dropRatio} place="right" />
            )}
            <Flex justify="center">
              <Image src={product.imageUrl} alt={product.name} width="100" />
            </Flex>
          </Flex>
          <Flex direction="column" ml="3em">
            <Title order={5} color="blue">
              {product.name}
            </Title>
            <Text size="1.25em" weight={700} mt="md">
              {formattedPrice}
            </Text>
            {product?.countOfPrices && (
              <Text size="xs">{product?.countOfPrices + " satıcı >"}</Text>
            )}
            {product?.followCount && (
              <Text size="xs" pt="md">
                {formattedFollowerNumber + "+ takip"}
              </Text>
            )}
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
};

export default HorizontalProductCard;
