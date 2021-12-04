import { FC } from "react";
import SearchLayout from "../../layouts/SearchLayout";

const useSearchScreen = () => {
  return {};
};

const SearchScreen: FC = () => {
  const {} = useSearchScreen();

  return (
    <>
      <SearchLayout searchField={<div>{"SearchField"}</div>} />
    </>
  );
};
export default SearchScreen;
