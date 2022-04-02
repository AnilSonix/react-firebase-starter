import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Center,
  Flex,
  Heading,
  useToast,
  VStack
} from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const toast = useToast();

  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, provider);
      toast({
        title: "Sweet !",
        description: "You have been logged in",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("login cancelled");
      toast({
        title: "Oops!",
        description: "Unable to login",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <Flex flexDir={"column"} h="full">
      {user && (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          shadow={"md"}
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Hi, {user.displayName || user.email}
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Looks like you are already logged in. <br />
            You may go to the dashboard or login with another account.
          </AlertDescription>
          <Link to={"/dashboard"}>
            <Button colorScheme={"green"} mt="4">
              Dashboard
            </Button>
          </Link>
        </Alert>
      )}
      <Center h="full" bgColor={"gray.200"} flex="2">
        <VStack bgColor={"gray.50"} shadow="md" p={[12, 10, 12]} rounded={"md"}>
          <Heading as="h1" my="4" color="gray.600" fontSize={["2xl", "3xl","4xl"]}>
            Login to continue
          </Heading>
          <Button
            leftIcon={<BsGoogle />}
            onClick={handleGoogleLogin}
            colorScheme="blue"
          >
            Login with Google
          </Button>
        </VStack>
      </Center>
    </Flex>
  );
};

export default Login;
