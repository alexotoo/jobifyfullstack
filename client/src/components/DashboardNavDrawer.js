import { useRef } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Portal,
  useDisclosure,
  Button,
  Center,
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import NavItemBox from "./NavItemBox";

const DashboardNavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <Center>
          <IoReorderThreeOutline />
        </Center>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="color.800">
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <NavItemBox position={"relative"} />
          </DrawerBody>

          <DrawerFooter>@great app</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default DashboardNavDrawer;
