import { Flex, Grid, Pagination } from "@mantine/core";
import { useState } from "react";
import VerticalProductCard from "../../Molecules/VerticalProduct/VerticalProduct";
import { useMediaQuery } from "@mantine/hooks";

interface VerticalProductListProps {
  products: any[];
}

const VerticalProductList = ({ products }: VerticalProductListProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 4;
  const totalPages =
    (products.length / itemsPerPage) % 2
      ? Math.floor(products.length / itemsPerPage)
      : Math.floor(products.length / itemsPerPage) + 1;

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = products.slice(startIndex, endIndex);

  function handlePageChange(pageNumber: any) {
    setActivePage(pageNumber);
  }

  return (
    <Flex direction="column" align="center" bg="gray.1" mt="lg">
      <Grid w={isMobile ? "100vw" : "30vw"} px="xs" py="md">
        {itemsToShow.map((product, index: number) => (
          <Grid.Col key={index} span={6}>
            <VerticalProductCard product={product} />
          </Grid.Col>
        ))}
      </Grid>
      <Pagination
        size="sm"
        my="md"
        value={activePage}
        total={totalPages}
        onChange={handlePageChange}
      />
    </Flex>
  );
};

export default VerticalProductList;
