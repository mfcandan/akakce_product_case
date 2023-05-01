import { Flex, Text } from "@mantine/core";

interface DropRatioBadgeProps {
  dropRatio: number;
}

const DropRatioBadge = ({ dropRatio }: DropRatioBadgeProps) => {
  return (
    <Flex
      pos="absolute"
      bg="#FF0000"
      miw="35px"
      mih="35px"
      top="10"
      left="10"
      justify="center"
      align="center"
      style={{
        zIndex: 1,
        borderRadius: "50%",
      }}
    >
      <Text size="0.7em" color="white" weight="900">
        %{dropRatio}
      </Text>
    </Flex>
  );
};

export default DropRatioBadge;
