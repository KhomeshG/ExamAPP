import {
  //   List,
  ListItem,
  //   ListIcon,
  //   OrderedList,
  UnorderedList,
  ChakraProvider,
  Link,
  Flex,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <ChakraProvider>
      <Flex flexDirection="row">
        {/* create unorder list */}
        <UnorderedList border="2px" borderColor="green.200">
          <ListItem>Home</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>About</ListItem>
          <ListItem>
            Services
            <UnorderedList>
              <ListItem>
                <Link>ExamCreate</Link>
              </ListItem>
              <ListItem>
                <Link>DataHandling</Link>
              </ListItem>
              <ListItem>
                <Link>Webservices</Link>
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>What we do</ListItem>
          <ListItem>Hire-us</ListItem>
        </UnorderedList>
      </Flex>
    </ChakraProvider>
  );
}

export default Navbar;
