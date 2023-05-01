import { Card, Flex, Image, Text, Title } from "@mantine/core";
import { Link } from "@remix-run/react";
import DropRatioBadge from "~/components/Atoms/DropRatioBadge";
import FollowerNumberFormatter from "~/components/Atoms/FollowerNumberFormatter";
import PriceFormatter from "~/components/Atoms/PriceFormatter";

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
            <Title order={6} color="blue">
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
        </Flex>
      </Card>
    </Link>
  );
};

export default HorizontalProductCard;
