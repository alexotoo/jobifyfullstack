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
  useDisclosure,
  Button,
  Center,
} from "@chakra-ui/react";
import NavItemBox from "./NavItemBox";

const DashboardNavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        bg={"color.200"}
        _hover={{ bg: "color.100", textDecoration: "none" }}
        color={"white"}
        onClick={onOpen}
      >
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
        <DrawerOverlay minH={"100%"} />
        <DrawerContent bg="color.800" minH={"100%"}>
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
