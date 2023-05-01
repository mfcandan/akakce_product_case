import { Flex, LoadingOverlay } from "@mantine/core";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
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
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    data && setVisible(false);
  }, [data]);

  return (
    <Flex direction="column" align="center" mt="lg">
      <LoadingOverlay visible={visible} overlayBlur={2} />
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
