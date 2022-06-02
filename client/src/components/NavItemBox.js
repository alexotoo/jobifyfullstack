import { VStack, Spacer } from "@chakra-ui/react";
import NavItem from "./NavItem";
import {
  IoBarChartSharp,
  IoSaveSharp,
  IoSearchCircleSharp,
  IoPersonSharp,
} from "react-icons/io5";
const NavItemBox = () => {
  return (
    <VStack>
      <NavItem text="Stats" icon={<IoBarChartSharp />} url="/dashboard/stats" />
      <NavItem
        text="All Jobs"
        icon={<IoSearchCircleSharp />}
        url="/dashboard/jobs"
      />
      <NavItem text="Add Job" icon={<IoSaveSharp />} url="/dashboard/saveJob" />
      <NavItem
        text="Profile"
        icon={<IoPersonSharp />}
        url="/dashboard/profile"
      />
    </VStack>
  );
};
export default NavItemBox;
