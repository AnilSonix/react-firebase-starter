import { Center, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";

type LoadingProps = {
  text?: string;
};

const Loading = ({ text = "Loading..." }: LoadingProps) => {
  return (
    <Center h="full">
      <VStack>
        <Spinner color="green" size="lg" />
        <Text color={"gray"} pt="4">
          {text}
        </Text>
      </VStack>
    </Center>
  );
};

export default Loading;
