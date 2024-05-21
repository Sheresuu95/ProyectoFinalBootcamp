import { FC } from "react";
import { UserProvider } from "../../components/common/UserContext";
import SearchResults from "../../components/common/SerachResults";

interface SearchResultPageProps {
  searchTerm: string;
}

const SearchResultPage: FC<SearchResultPageProps> = ({ searchTerm }) => {
  return (
    <UserProvider> {/* Aquí envuelve el componente con el UserProvider */}
      <SearchResults searchTerm={searchTerm} />
    </UserProvider>
  );
};

export default SearchResultPage;

