import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  const searchIcon = (
    <FontAwesomeIcon
      icon={faSearch}
      size="lg"
      color="lightGray"
      className={`absolute left-4 top-3 bottom-0 cursor-pointer hover:text-subheading`}
    />
  );
  
  return (
    <div className="bg-white z-10 fixed w-full top-0 right-0 left-0 h-20 flex items-center justify-center shadow">
      <div className="h-full w-1/4 py-5">
        <div className="flex w-full relative">
          {searchIcon}
          <input
            className="bg-gray-100 text-center border border-gray-100 w-full h-full rounded-full"
            type="text"
            name="search"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
