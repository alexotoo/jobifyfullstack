import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useAppContext } from "../context/contextApp";

const ShowAlert = () => {
  const { alertType, alertText, alertTitle } = useAppContext();
  return (
    <Alert status={alertType} mb="10px" borderRadius="lg">
      <AlertIcon />
      <AlertTitle mr={2}>{alertTitle}</AlertTitle>
      <AlertDescription>{alertText}</AlertDescription>
      {/* <CloseButton position="absolute" right="8px" top="8px" /> */}
    </Alert>
  );
};
export default ShowAlert;
