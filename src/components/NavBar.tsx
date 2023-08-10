import { HStack, Image, Spacer } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={Logo} boxSize="60px" />

      {/* <Spacer /> */}
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
