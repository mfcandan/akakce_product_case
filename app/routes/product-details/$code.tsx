import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import ProductDetails from "~/components/Organisms/ProductDetails/ProductDetails";
import { getProductDetails } from "~/models/products.server";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.code, `params.slug is required`);

  const productDetails = await getProductDetails(parseInt(params.code));

  invariant(productDetails, `Post not found: ${params.code}`);
  return json({ productDetails });
};

export default function ProductDetailsPage() {
  const { productDetails } = useLoaderData<typeof loader>();

  return (
    <>{productDetails && <ProductDetails productDetails={productDetails} />}</>
  );
}
