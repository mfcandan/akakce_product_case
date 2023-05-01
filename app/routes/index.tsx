import { Flex, Title } from "@mantine/core";
import HorizontalProductList from "~/components/Organisms/HorizontalProductList/HorizontalProductList";
import VerticalProductList from "~/components/Organisms/VerticalProductList/VerticalProductList";

export default function Index() {
  return (
    <Flex direction="column" align="center" mt="lg">
      <Title>Akakçe Case App</Title>
      <HorizontalProductList />
      <VerticalProductList />
    </Flex>
  );
}
