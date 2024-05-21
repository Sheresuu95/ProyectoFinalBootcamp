import React, { FC } from "react";
import SearchResults from "../../components/common/SerachResults"

interface SearchResultPageProps {
    searchTerm: string;
  } 
  

  const SearchResultPage: FC<SearchResultPageProps> = ({ searchTerm }) => {
  return (
    <>
        <SearchResults searchTerm={searchTerm} />
    </>
  )
}

export default SearchResultPage
