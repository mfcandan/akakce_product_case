import { Flex } from "@mantine/core";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import HomeLink from "~/components/Atoms/HomeLink";
import HorizontalProductList from "~/components/Organisms/HorizontalProductList/HorizontalProductList";
import VerticalProductList from "~/components/Organisms/VerticalProductList/VerticalProductList";
import { getProducts } from "~/models/products.server";

export const loader = async () => {
  return json({
    data: await getProducts(),
  });
};

export default function Index() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <Flex direction="column" align="center" mt="lg">
      <HomeLink />
      {data.result.horizontalProducts && (
        <HorizontalProductList products={data.result.horizontalProducts} />
      )}
      {data.result.products && (
        <VerticalProductList products={data.result.products} />
      )}
    </Flex>
  );
}
