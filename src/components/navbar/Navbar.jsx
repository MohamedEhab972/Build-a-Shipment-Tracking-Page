import { Navbar, Dropdown } from "flowbite-react";
import Logo from "../../assets/BostaLogo.png";
import { SearchIcon } from "../searchIcon/SearchIcon";
import { DarkModeToggle } from "./../darkModeToggle/DarkModeToggle";
import { useTranslation } from "react-i18next";

export function NavbarComponent() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  const lang = localStorage.getItem("i18nextLng");

  return (
    <Navbar
      fluid
      rounded
      className="bg-[#F3FAFB] dark:bg-gray-900 px-4 md:px-60"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="flex items-center gap-7">
        <DarkModeToggle />
        <Dropdown
          label={t("language")}
          inline
          className="w-[100px] dark:text-white dark:bg-gray-800"
        >
          <Dropdown.Item
            className="justify-end pr-2 dark:text-gray-300"
            onClick={() => handleLanguageChange("ar")}
          >
            {t("arabic")}
          </Dropdown.Item>
          <Dropdown.Item
            className="justify-end pr-2 dark:text-gray-300"
            onClick={() => handleLanguageChange("en")}
          >
            {t("english")}
          </Dropdown.Item>
        </Dropdown>
        <span className="inline md:hidden cursor-pointer">
          <SearchIcon />
        </span>
      </div>
      <Navbar.Brand
        href="#"
        className="flex items-center justify-center gap-2 dark:text-white"
      >
        <span className="self-center text-[#E30613] text-3xl whitespace-nowrap font-extrabold dark:text-white">
          {t("bosta")}
        </span>
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
    </Navbar>
  );
}
