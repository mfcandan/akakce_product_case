import { Card, Grid } from "@mantine/core";
import HorizontalProduct from "../../Molecules/HorizontalProduct/HorizontalProduct";

interface HorizontalProductListProps {
  products: {
    id: string;
    name: string;
    price: string;
    image: string;
  }[];
}

const HorizontalProductList = ({ products }: HorizontalProductListProps) => {
  return (
    <Grid mt="lg">
      {products.map((product, index) => (
        <Grid.Col key={index} span={6}>
          <HorizontalProduct product={product} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default HorizontalProductList;
