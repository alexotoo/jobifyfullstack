import { VStack, Spacer, Box, Center } from "@chakra-ui/react";
import NavItem from "./NavItem";
import {
  IoBarChartSharp,
  IoSaveSharp,
  IoSearchCircleSharp,
  IoPersonSharp,
} from "react-icons/io5";
import Image from "next/image";
import logo from "../../public/images/logo.png";

const NavItemBox = ({ position }) => {
  return (
    <VStack position={position} minW="25%" bg="color.800" h="100%">
      <Box
        h="100px"
        pt="2rem"
        borderBottom="1px"
        borderColor="gray.400"
        w="70%"
        mb="30px"
      >
        <Center>
          <Image alt="logo" src={logo} width="150px" height={"50%"} />
        </Center>
      </Box>

      <NavItem text="Stats" icon={<IoBarChartSharp />} url="/dashboard/stats" />
      <Spacer />
      <NavItem
        text="All Jobs"
        icon={<IoSearchCircleSharp />}
        url="/dashboard/jobs"
      />
      <Spacer />
      <NavItem text="Add Job" icon={<IoSaveSharp />} url="/dashboard/saveJob" />
      <Spacer />
      <NavItem
        text="Profile"
        icon={<IoPersonSharp />}
        url="/dashboard/profile"
      />
      <Spacer />
    </VStack>
  );
};
export default NavItemBox;
