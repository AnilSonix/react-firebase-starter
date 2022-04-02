import { Button, Center, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";

type ErrorViewProps = {
  text?: string;
  label?: string;
  onClick?: () => void;
};
const ErrorView = ({
  text = "Something went wrong",
  label = "Try again",
  onClick,
}: ErrorViewProps) => {
  return (
    <Center h="full">
      <VStack>
        <MdOutlineErrorOutline size="64" />
        <Text color={"gray"} pt="4">
          {text}
        </Text>
        {label && onClick && (
          <Button onClick={onClick} mt="8">
            {label}
          </Button>
        )}
      </VStack>
    </Center>
  );
};

export default ErrorView;
