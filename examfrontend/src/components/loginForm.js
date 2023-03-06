import * as React from "react";

import {
  ChakraProvider,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Center,
  Button,
} from "@chakra-ui/react";

function Login() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <FormLabel my="30px" fontSize={32} textAlign={["center"]}>
        Login
      </FormLabel>
      <Center>
        <Box
          w="30%"
          py="30px"
          border="1px"
          borderColor="red.200"
          textAlign={["center"]}
        >
          <FormControl>
            <FormLabel textAlign={["center"]}>User-Name</FormLabel>
            <Input w="50%%" type="email" />
            <FormHelperText>Entre Your Usename </FormHelperText>

            <FormLabel textAlign={["center"]}>Entre Password</FormLabel>
            <Input w="50%%" type="password" />
            <FormHelperText>Password</FormHelperText>
          </FormControl>
          <Button my="20px" variant="solid" colorScheme="blue">
            Submit
          </Button>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default Login;
