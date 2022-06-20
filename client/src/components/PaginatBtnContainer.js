import { IoChevronForward, IoChevronBackSharp } from "react-icons/io5";
import { Box, Button, HStack } from "@chakra-ui/react";
import { useAppContext } from "../context/contextApp";

const PaginatBtnContainer = () => {
  const { numOfPages, page, changePage } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    changePage(newPage);
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    changePage(newPage);
  };
  return (
    <HStack my="2rem">
      <Button
        className="prev-btn"
        onClick={prevPage}
        bg="color.200"
        color="white"
        _hover={{ bg: "color.200", color: "color.100" }}
      >
        <IoChevronBackSharp />
        prev
      </Button>

      <HStack className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <Button
              _hover={{ bg: "color.200", color: "color.100" }}
              bg="color.100"
              disabled={pageNumber === page}
              color="color.200"
              type="button"
              key={pageNumber}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </Button>
          );
        })}
      </HStack>
      <Button
        _hover={{ bg: "color.200", color: "color.100" }}
        onClick={nextPage}
        bg="color.200"
        color="white"
      >
        next
        <IoChevronForward />
      </Button>
    </HStack>
  );
};
export default PaginatBtnContainer;
