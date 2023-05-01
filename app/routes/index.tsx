import { Flex } from "@mantine/core";
import HomeLink from "~/components/Atoms/HomeLink";
import HorizontalProductList from "~/components/Organisms/HorizontalProductList/HorizontalProductList";
import VerticalProductList from "~/components/Organisms/VerticalProductList/VerticalProductList";

export default function Index() {
  return (
    <Flex direction="column" align="center" mt="lg">
      <HomeLink />
      <HorizontalProductList />
      <VerticalProductList />
    </Flex>
  );
}
