import React, {useEffect} from "react";
import MyPagination from "./MyPagination";
import { useSearchParams } from "react-router-dom";

export default function Pagination(props) {

  const [currPage, setCurrPage] = React.useState(props.currentPage);
  const [totalPages] = React.useState(props.totPages);
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    afterPageClicked(currPage);
    goToSearch(currPage);
  }, []);

  const goToSearch = (currPage) => {
    searchParams.set('page', currPage);
    setSearchParams(searchParams);
  }


  const afterPageClicked = (page_number) => {
    setCurrPage(page_number);
    goToSearch(page_number);
  };

  return (
    <MyPagination
      totPages={totalPages}
      currentPage={currPage}
      pageClicked={(ele) => {
        afterPageClicked(ele);
      }}
    >
    </MyPagination>
  );
}
