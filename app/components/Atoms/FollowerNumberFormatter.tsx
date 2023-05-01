import { Text } from "@mantine/core";

interface FollowerNumberFormatterProps {
  followerNumber: number;
}

const FollowerNumberFormatter = ({
  followerNumber,
}: FollowerNumberFormatterProps) => {
  const formattedFollowerNumber =
    followerNumber > 1000
      ? new Intl.NumberFormat("en-US", {
          style: "decimal",
          minimumFractionDigits: 0,
        }).format(followerNumber / 1000)
      : followerNumber;

  return (
    <Text size="xs" pt="md">
      {formattedFollowerNumber + "+ takip"}
    </Text>
  );
};

export default FollowerNumberFormatter;
