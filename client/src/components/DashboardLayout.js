import { Grid, GridItem, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import NavItemBox from "./NavItemBox";

function DashboardLayout({ children }) {
  return (
    <Grid
      minH="100vh"
      templateRows="repeat(12, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={4}
      bg="#F4F7FE"
    >
      <GridItem rowSpan={12} colSpan={3} bg="#F4F7FE">
        <NavItemBox />
      </GridItem>
      <GridItem colSpan={9} rowSpan={2} bg="pink">
        <NextLink href="/dashboard" passHref>
          <Link>Home</Link>
        </NextLink>
        <NextLink href="/dashboard/jobs" passHref>
          <Link>jobs</Link>
        </NextLink>
      </GridItem>
      <GridItem colSpan={9} rowSpan={10}>
        {children}
      </GridItem>
    </Grid>
  );
  ``;
}
export default DashboardLayout;
