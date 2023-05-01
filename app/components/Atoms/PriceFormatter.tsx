import { Text } from "@mantine/core";

interface PriceFormatterProps {
  price: number;
}

const PriceFormatter = ({ price }: PriceFormatterProps) => {
  const formattedPrice = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
  }).format(price);

  return (
    <Text size="1.25em" weight={800}>
      {formattedPrice}
    </Text>
  );
};

export default PriceFormatter;
