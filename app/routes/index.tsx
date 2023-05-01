import { Flex, Title } from "@mantine/core";
import HorizontalProductList from "~/components/Organisms/HorizontalProductList/HorizontalProductList";
import VerticalProductList from "~/components/Organisms/VerticalProductList/VerticalProductList";

export default function Index() {
  return (
    <Flex direction="column" align="center" mt={50}>
      <Title>Akakçe Case App</Title>
      <VerticalProductList />
    </Flex>
  );
}
