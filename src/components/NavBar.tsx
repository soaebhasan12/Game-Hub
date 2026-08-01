import { HStack, Image, Text, Heading } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <HStack h="70px" px={4} spacing={4}>
        <Image src={logo} boxSize="60px" objectFit="contain" />
        <Heading size="lg">Game Hub</Heading>
      </HStack>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;