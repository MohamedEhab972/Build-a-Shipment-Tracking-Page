import { useState, useRef } from "react";
import { SearchBar } from "../searchBar/SearchBar";
import { FaMagnifyingGlass } from "react-icons/fa6";

export function SearchIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const lang = localStorage.getItem("i18nextLng");

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  const handleInteraction = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <span
        onClick={toggleDropdown}
        className="cursor-pointer text-gray-800 dark:text-white"
      >
        <FaMagnifyingGlass />
      </span>
      {isOpen && (
        <div
          className={`absolute top-10 ${lang === "ar" ? "-left-[250px]" : "-left-[160px]"} bg-white dark:bg-gray-800 shadow-lg p-3 rounded`}
          onMouseDown={handleInteraction}
        >
          <SearchBar closeDropdown={closeDropdown} />
        </div>
      )}
    </div>
  );
}
