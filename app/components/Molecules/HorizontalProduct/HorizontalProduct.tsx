import { Card } from "@mantine/core";
import { Link } from "@remix-run/react";
import { json } from "@remix-run/node";

export interface HorizontalProductCardProps {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
  };
}

const HorizontalProductCard = ({ product }: HorizontalProductCardProps) => {

  function redirectToProduct(id: string) {
    return json(null, {
      status: 302,
      headers: {
        Location: `/products/${id}`,
      },
    });
  }

  return (
    <Link to={`/product-details/${product.id}`}>
      <Card shadow="sm" onClick={() => redirectToProduct(product.id)}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </Card>
    </Link>
  );
};

export default HorizontalProductCard;
