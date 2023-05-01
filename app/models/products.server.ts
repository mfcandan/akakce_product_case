import { ProductDetailsProps } from "~/components/Organisms/ProductDetails/ProductDetails";

const productsUrl = "https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05";
const getProductDetailsUrl =
  "https://mocki.io/v1/1a1fb542-22d1-4919-914a-750114879775?code=";

type Response = {
  result: {
    nextUrl: string;
    products: Products[];
    horizontalProducts?: Products[];
  };
};

export type Products = {
  code: number;
  imageUrl: string;
  name: string;
  dropRatio?: number;
  price: number;
  countOfPrices?: number;
  followCount?: number;
};

export const getProducts = async (nextUrl?: string): Promise<Response> => {
  const url = nextUrl ? nextUrl : productsUrl;
  const response = await fetch(url);
  const data = await response.json();

  if (data.result.nextUrl) {
    const nextResponse = await getProducts(data.result.nextUrl);

    if (nextResponse.result.products) {
      data.result.products = data.result.products.concat(
        nextResponse.result?.products
      );
    }
    if (nextResponse.result.horizontalProducts) {
      data.result.horizontalProducts = data.result.horizontalProducts.concat(
        nextResponse.result?.horizontalProducts
      );
    }
  }

  return data;
};

export const getProductDetails = async (code: number): Promise<any> => {
  const url = getProductDetailsUrl + code;
  const response = await fetch(url);
  const data = await response.json();

  return data.result as ProductDetailsProps;
};
