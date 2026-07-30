import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack h="70px" px={4} spacing={4}>
      <Image src={logo} boxSize="60px" objectFit="contain" />
      <Text fontSize="2xl">Game Hub</Text>
    </HStack>
  );
};

export default NavBar;
