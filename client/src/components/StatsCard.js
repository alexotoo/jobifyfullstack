import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useAppContext } from "../context/contextApp";
import { IoHandLeft, IoBagCheckSharp, IoRefreshCircle } from "react-icons/io5";

const StatsCard = () => {
  const { stats } = useAppContext();

  console.log(stats);
  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <IoRefreshCircle />,
      color: "color.200",
      bcg: "color.300",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <IoBagCheckSharp />,
      color: "color.600",
      bcg: "color.700",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <IoHandLeft />,
      color: "color.400",
      bcg: "color.500",
    },
  ];

  console.log(defaultStats);
  return (
    <Box
    // bg={bcg}
    // color={color}
    // display="flex"
    // flexDir="column"
    // borderRadius="2xl"
    // boxShadow="lg"
    >
      <Flex>
        <Text></Text>
        <Center></Center>
      </Flex>
      <Text></Text>
      book
    </Box>
  );
};
export default StatsCard;
// {
//   count, title, icon, color, bcg;
// }
