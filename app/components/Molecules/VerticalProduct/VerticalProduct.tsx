import { Card, Flex, Image, Text, Title } from "@mantine/core";
import { Link } from "@remix-run/react";
import DropRatioBadge from "../../Atoms/DropRatioBadge";

interface Product {
  code: number;
  imageUrl: string;
  name: string;
  dropRatio: number;
  price: number;
  countOfPrices?: number;
  followCount?: number;
}

const VerticalProductCard = ({ product }: { product: Product }) => {
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
      <Card shadow="sm" onClick={() => {}}>
        <Flex direction="column" mih="300px" justify="space-between">
          {product.dropRatio && (
            <DropRatioBadge dropRatio={product.dropRatio} />
          )}
          <Flex justify="center">
            <Image src={product.imageUrl} alt={product.name} width="100" />
          </Flex>
          <Title order={5} color="blue" mt="md">
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
      </Card>
    </Link>
  );
};

export default VerticalProductCard;
