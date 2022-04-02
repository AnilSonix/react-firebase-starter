import {
  Button,
  Center,
  Heading,
  HStack,
  Text,
  useToast,
  VStack
} from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import ErrorView from "../../shared/components/error";
import Loading from "../../shared/components/loading";

const Logout = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const toast = useToast();

  async function handleSignout() {
    try {
      await auth.signOut();
      toast({
        title: "Bye!",
        description: "You have been logged out",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/login");
    } catch (error) {
      console.error("logout cancelled");
      toast({
        title: "Oops!",
        description: "Unable to logout",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  if (loading) {
    return <Loading text="Checking user details..." />;
  }

  if (error) {
    return <ErrorView text="Unable to connect" />;
  }

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <Center h="full">
      <VStack>
        <Heading as="h1">Hi, {user.displayName || user.email}</Heading>
        <Text pt="2">Would you like to logout ?</Text>
        <HStack pt="8">
          <Button onClick={() => navigate("/")}>No</Button>
          <Button colorScheme={"whatsapp"} onClick={handleSignout}>
            Yes
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
};

export default Logout;
