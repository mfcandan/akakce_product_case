import { Card, Flex, Image, Text, Title } from "@mantine/core";
import { Link } from "@remix-run/react";
import FollowerNumberFormatter from "~/components/Atoms/FollowerNumberFormatter";
import PriceFormatter from "~/components/Atoms/PriceFormatter";
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
          <PriceFormatter price={product.price} />
          {product?.countOfPrices && (
            <Text size="xs">{product?.countOfPrices + " satıcı >"}</Text>
          )}
          {product?.followCount && (
            <FollowerNumberFormatter followerNumber={product?.followCount} />
          )}
        </Flex>
      </Card>
    </Link>
  );
};

export default VerticalProductCard;
