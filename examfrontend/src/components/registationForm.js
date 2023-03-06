import * as React from "react";

import { useState } from "react";

//. import `ChakraProvider` component
// import { ChakraProvider } from "@chakra-ui/react";
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

function Registration() {
  // 2. Wrap ChakraProvider at the root of your app
  let [sEmail, updatedEmail] = useState("");
  let [sfullName, updatedFullName] = useState("");
  let [sPassword, updatedPassword] = useState("");
  function emailInputChange(event) {
    updatedEmail(event.target.value);
  }
  function fullNameInputChange(event) {
    updatedFullName(event.target.value);
  }
  function passwordInputChange(event) {
    updatedPassword(event.target.value);
  }
  function createHandleEvent(event) {
    event.preventDefault();
    let res = {
      email: sEmail,
      fullname: sfullName,
      password: sPassword,
    };

    console.log(res);
  }
  return (
    <ChakraProvider>
      <FormLabel my="30px" fontSize={32} textAlign={["center"]}>
        Registration
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
            <FormLabel textAlign={["center"]}>Email address</FormLabel>
            <Input w="50%%" type="email" onChange={emailInputChange} />
            <FormHelperText>We'll never share your email.</FormHelperText>

            <FormLabel fost textAlign={["center"]}>
              Full Name
            </FormLabel>
            <Input w="50%%" type="text" onChange={fullNameInputChange} />
            <FormHelperText>First Name Middle name Surname.</FormHelperText>
            <FormLabel textAlign={["center"]}>Entre Password</FormLabel>
            <Input w="50%%" type="password" onChange={passwordInputChange} />
            <FormHelperText>
              Password should be 9 digits must conatin one Symblo(@#$%)One
              Uppcase character One Number.
            </FormHelperText>
            <FormLabel textAlign={["center"]}>Re-Entre Password</FormLabel>
            <Input w="50%%" type="password" />
            <FormHelperText>Password must be matched above .</FormHelperText>
          </FormControl>
          <Button
            my="20px"
            variant="solid"
            colorScheme="blue"
            onClick={createHandleEvent}
          >
            Submit
          </Button>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default Registration;
